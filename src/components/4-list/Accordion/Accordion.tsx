import * as React from "react";
import { cn } from "../../../utils/cn";

interface AccordionProps {
  id: string;
  className?: string;
  label: string;
  children?: React.ReactNode;
  defalutOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  id,
  className = "",
  label = "",
  children,
  defalutOpen = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(defalutOpen);

  const toggleAccordion = (Open: boolean) => {
    setIsOpen(Open);
  };
  return (
    <li id={id} className={cn(className, "list-none")}>
      <div className="relative flex w-full cursor-pointer flex-col text-base">
        <button
          onClick={() => toggleAccordion(!isOpen)}
          className="flex h-[40px] w-full items-center justify-between p-2 hover:bg-black-3-opacity"
          aria-expanded={isOpen}
        >
          <span className="truncate font-medium">{label}</span>
          <span
            className={cn(
              "material-symbols-rounded ml-1 flex select-none text-black-sub transition-all duration-300",
              isOpen ? "-rotate-180" : "rotate-0"
            )}
          >
            expand_more
          </span>
        </button>
        <div
          className={cn(
            "transition-max-height overflow-hidden transition-all duration-300",
            isOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          {children}
        </div>
      </div>
    </li>
  );
};
Accordion.displayName = "Accordion";
