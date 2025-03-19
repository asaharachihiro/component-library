import * as React from "react";
import { cn } from "../../../utils/cn";

interface AccordionProps {
  id: string;
  className?: string;
  label: string;
  children?: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  id,
  className = "",
  label = "",
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = (Open: boolean) => {
    setIsOpen(Open);
  };
  return (
    <div id={id} className={className}>
      <div className="relative flex w-full cursor-pointer list-none flex-col text-base">
        <button
          onClick={() => toggleAccordion(!isOpen)}
          className="flex h-[40px] w-full items-center justify-between p-2 hover:bg-black-3-opacity"
          aria-expanded={isOpen}
        >
          <span className="truncate">{label}</span>
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
    </div>
  );
};
Accordion.displayName = "Accordion";
