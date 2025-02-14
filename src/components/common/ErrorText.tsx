export const ErrorText = ({ text }: { text?: string }) => {
  return (
    <div className="text-danger flex items-center">
      <span className="material-symbols-rounded icon-fill">emergency_home</span>
      <span className="text-xs font-medium">{text}</span>
    </div>
  );
};
ErrorText.displayName = "ErrorText";
