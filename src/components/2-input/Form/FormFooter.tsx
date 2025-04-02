import * as React from "react";
import { cn } from "../../../utils/cn";
import { Button } from "../../1-action/Button";

interface FormFooterProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
  step?: number;
}

export const FormFooter: React.FC<FormFooterProps> = ({
  id,
  className,
  children,
  step,
}) => {
  const [page, setPage] = React.useState(1);
  const hasPrev = step && page > 1;
  const hasNext = step && page < step;

  return (
    <div id={id} className={cn(className, "flex justify-between pt-6")}>
      <div>
        {hasPrev && (
          <Button
            id="prevButton"
            variant={"textSecondary"}
            icon="chevron_left"
            label="もどる"
            onClick={() => setPage((prev) => prev - 1)}
          />
        )}
      </div>
      {hasNext ? (
        <Button
          id="nextButton"
          variant={"textSecondary"}
          icon="chevron_right"
          className={cn(hasNext && "flex-row-reverse")}
          label="次へ"
          onClick={() => setPage((prev) => prev + 1)}
        />
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};
FormFooter.displayName = "FormFooter";
FormFooter.displayName = "FormFooter";
