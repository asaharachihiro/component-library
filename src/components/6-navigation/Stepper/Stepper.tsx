import * as React from "react";
import { cn } from "../../../utils/cn";

interface StepperProps {
  id: string;
  className?: string;
  steps: { label: string; status: "incomplete" | "inprogress" | "completed" }[];
}

export const Stepper: React.FC<StepperProps> = ({
  id,
  className = "",
  steps,
}) => {
  const iconStyle = (status: string) => {
    return cn(
      "h-[20px] w-[20px] flex items-center justify-center text-xs mr-2 shrink-0",
      {
        "text-black-sub border border-black-sub rounded-full":
          status === "incomplete",
        "text-white bg-main rounded-full font-bold": status === "inprogress",
        "text-2xl text-black-sub": status === "completed",
      }
    );
  };
  const labelStyle = (status: string) => {
    return cn("text-base", {
      "text-black-sub": status === "incomplete",
      "text-main font-bold": status === "inprogress",
      "text-black-sub font-regular": status === "completed",
    });
  };

  const separatorStyle = "h-[2px] flex-grow rounded-full bg-black-20-opacity";

  return (
    <div id={id} className={className}>
      <div className="flex items-center space-x-2">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              key={index}
              className={cn("flex size-fit flex-nowrap items-center")}
              aria-label={`ステップ ${index + 1}: ${step.label}`}
              aria-current={step.status === "inprogress" ? "step" : undefined}
            >
              <span className={iconStyle(step.status)}>
                {step.status === "completed" ? (
                  <span className="material-symbols-rounded icon-fill">
                    check_circle
                  </span>
                ) : (
                  index + 1
                )}
              </span>
              <div className={labelStyle(step.status)}>{step.label}</div>
            </div>
            {index < steps.length - 1 && (
              <div key={`line-${index}`} className={separatorStyle} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
Stepper.displayName = "Stepper";
