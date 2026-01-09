import { cn } from "../../utils/cn";

export const ErrorText = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("mt-1 flex items-center font-sans text-danger", className)}
    >
      <span className="material-symbols-rounded icon-fill">emergency_home</span>
      <span className="typo-label-sm">{text}</span>
    </div>
  );
};
ErrorText.displayName = "ErrorText";
