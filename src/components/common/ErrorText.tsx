export const ErrorText = ({ text }: { text?: string }) => {
  return (
    <div className="flex items-center text-danger">
      <span className="material-symbols-rounded icon-fill">emergency_home</span>
      <span className="text-xs font-medium">{text}</span>
    </div>
  );
};
ErrorText.displayName = "ErrorText";
