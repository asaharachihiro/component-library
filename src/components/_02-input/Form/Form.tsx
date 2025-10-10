import * as React from "react";
import { cn } from "../../../utils/cn";
import { FormContext } from "./FormContext";

interface FormProps {
  id: string;
  formLabel?: string;
  description?: string;
  className?: string;
  supportText?: string;
  children?: React.ReactNode;
  onSubmit?: (formData: Record<string, any>) => void;
  validate?: (formData: Record<string, any>) => Record<string, string | null>; // id: errorText || null 形式で返す
  values?: Record<string, any>;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      id,
      formLabel = "",
      description = "",
      supportText = "",
      className = "",
      children,
      onSubmit,
      validate,
      values = {},
      ...props
    },
    ref
  ) => {
    // 内部state
    const [formData, setFormData] = React.useState<Record<string, any>>(values);
    const [errors, setErrors] = React.useState<Record<string, string | null>>(
      {}
    );

    const formInnerRef = React.useRef<HTMLFormElement>(null);

    // onChangeハンドラー
    const handleInputChange = (id: string, value: string) => {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    };

    // フォーム送信時の処理
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // フォーカス中の要素をblurさせる
      if (formInnerRef.current) {
        const elements = formInnerRef.current.elements;
        for (let i = 0; i < elements.length; i++) {
          const el = elements[i] as HTMLElement;
          if (typeof el.blur === "function") {
            el.blur();
          }
        }
      }
      // _で始まるidを除外
      setTimeout(() => {
        // _で始まるidを除外
        const filteredFormData = Object.fromEntries(
          Object.entries(formData).filter(([key]) => !key.startsWith("_"))
        );
        if (validate) {
          const validationResults = validate(filteredFormData);
          const hasErrors = Object.values(validationResults).some(
            (error) => error !== null
          );
          if (hasErrors) {
            setErrors(validationResults);
            return;
          }
        }
        if (onSubmit) {
          onSubmit(filteredFormData);
        }
        localStorage.setItem(id, JSON.stringify(filteredFormData));
      }, 0);
    };

    return (
      <FormContext.Provider value={{ formData, errors, handleInputChange }}>
        <div className={cn(className, "space-y-6")} id={id}>
          {formLabel && (
            <label className="block text-lg font-bold">{formLabel}</label>
          )}
          <div className="space-y-1">
            {description && <p className="text-base">{description}</p>}
            {supportText && (
              <p className="mb-6 text-sm text-black-sub">{supportText}</p>
            )}
          </div>
          <form
            ref={(node) => {
              formInnerRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref)
                (
                  ref as React.MutableRefObject<HTMLFormElement | null>
                ).current = node;
            }}
            {...props}
            className="flex-col space-y-2 pl-4"
            onSubmit={handleSubmit}
          >
            {children}
          </form>
        </div>
      </FormContext.Provider>
    );
  }
);
Form.displayName = "Form";
