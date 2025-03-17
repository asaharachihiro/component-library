import * as React from "react";
import { Button } from "../../1-action/Button";

interface FilterButtonProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  id,
  className,
  children,
}) => {
  const [showPanel, setShowPanel] = React.useState(false);

  // TODO:useFormContext
  const hasFormValue = false;

  return (
    <>
      <Button
        id={id}
        variant="textPrimary"
        icon="filter_list"
        className={className}
        onClick={() => setShowPanel(!showPanel)}
        isActive={hasFormValue}
      >
        フィルター
      </Button>
      {showPanel && (
        <div className="rounded-lg bg-white shadow-low">
          <div className="flex-col space-y-4 p-6">
            {/* TODO: Formを直したあとでレイアウト修正 */}
            {/* <Form id={"filterForm"}> */}
            {children}
            {/* </Form> */}
          </div>
          <div className="sticky flex justify-between border-t border-black-20-opacity p-6">
            <Button variant={"textPrimary"} icon="refresh">
              リセット
            </Button>
            <Button
              variant={"primary"}
              size="s"
              type="submit"
              form="filterForm"
            >
              検索
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
FilterButton.displayName = "FilterButton";
