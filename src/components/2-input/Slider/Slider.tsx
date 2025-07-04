import * as React from "react";
import { ErrorText, FormLabel } from "@components/0-common";
import { useFormContext } from "../Form";

interface SliderProps {
  id: string;
  className?: string;
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
  supportMessage?: string;
  errorMessage?: string;
  value?: number;
  min?: number;
  max?: number;
  isValid?: boolean;
  disabled?: boolean;
  onChange?: (id: string, value: number) => void;
  onBlur?: (id: string, value: number) => void;
  onFocus?: (id: string, value: number) => void;
  tooltip?: React.ReactNode;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  id,
  isRequired = false,
  className = "",
  placeholder,
  supportMessage,
  errorMessage,
  value = 0, //TODO:formcontextから取得するようにする
  min = 0,
  max = 100,
  onChange,
  onBlur,
  onFocus,
  isValid,
  disabled = false,
  tooltip,
  ...props
}) => {
  const context = useFormContext();
  // FormContextが提供されていない場合
  const formData = (context?.formData as Record<string, unknown>) || {};
  const errors = context?.errors || {};
  const handleInputChange = context?.handleInputChange || (() => {});
  const isValidStatus = isValid ? isValid : errors[id] == null;

  const initialValue =
    typeof value !== "undefined"
      ? value
      : typeof formData[id] !== "undefined"
        ? Number(formData[id])
        : 0;

  const [currentValue, setCurrentValue] = React.useState(initialValue);
  const percentage = ((currentValue - min) / (max - min)) * 100;

  // ドラッグ操作のハンドラ
  const handleMouseMove = (e: MouseEvent) => {
    const slider = document.getElementById(id);
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newValue = Math.round((offsetX / rect.width) * (max - min) + min);

    handleChange(newValue);
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // クリック位置から値を更新する関数
  const updateValueFromPosition = (clientX: number) => {
    const slider = document.getElementById(id);
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const newValue = Math.round((offsetX / rect.width) * (max - min) + min);
    handleChange(newValue);
  };

  const handleChange = (newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, min), max);
    setCurrentValue(clampedValue);

    if (onChange) {
      onChange(id, clampedValue);
    }
    if (handleInputChange) {
      handleInputChange(id, clampedValue.toString());
    }
  };

  return (
    <>
      <div id={id} className={className} draggable="false">
        {label && (
          <FormLabel label={label} isRequired={isRequired} tooltip={tooltip} />
        )}
        <div className="">
          <div className="relative flex flex-col">
            <div
              className="-top-9 left-0 mb-2 flex size-fit h-7 min-w-7 items-center justify-center rounded-full bg-black-10-opacity px-1 text-xs font-regular text-black"
              style={{
                marginLeft: `${percentage}%`,
                transform: "translateX(-50%)",
              }}
            >
              {currentValue}
            </div>
            <div
              id={id}
              className="relative flex h-2 w-full cursor-pointer"
              onClick={(e) => updateValueFromPosition(e.clientX)}
            >
              <div
                className="h-2 pr-[3px]"
                style={{
                  width: `calc(${percentage}%)`,
                }}
              >
                <div className="h-full w-full rounded-l-md rounded-r-sm bg-main" />
              </div>
              <div
                className="h-2 pl-[3px]"
                style={{
                  width: `calc(${100 - percentage}%)`,
                }}
              >
                <div className="h-full w-full rounded-l-sm rounded-r-md bg-main-bg" />
              </div>
              <div
                className="absolute top-1/2 h-4 w-[2px] -translate-y-1/2 cursor-pointer rounded-full bg-main active:h-5"
                style={{ left: `calc(${percentage}% - 1px)` }}
                onMouseDown={handleMouseDown}
              >
                <div className="bg-transparent absolute left-[-11px] top-[-4px] h-6 w-6 cursor-pointer rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isValidStatus && (
        <ErrorText
          text={errors[id] || errorMessage || "入力がエラーになっています。"}
        />
      )}
    </>
  );
};
Slider.displayName = "Slider";
