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
  // 内部state
  const [isOpen, setIsOpen] = React.useState(defalutOpen);

  const toggleAccordion = (Open: boolean) => {
    setIsOpen(Open);
  };

  const contentRef = React.useRef<HTMLDivElement>(null);

  // 閉じている要素のフォーカスを無効化
  React.useEffect(() => {
    if (contentRef.current) {
      const focusables = contentRef.current.querySelectorAll<HTMLElement>(
        "a, button, input, textarea, select, [tabindex]"
      );
      focusables.forEach((el) => {
        if (isOpen) {
          // 元のtabIndexをdata属性で保持しておく
          if (el.hasAttribute("data-orig-tabindex")) {
            el.tabIndex = parseInt(el.getAttribute("data-orig-tabindex")!, 10);
          } else {
            el.setAttribute("data-orig-tabindex", el.tabIndex.toString());
            el.tabIndex = el.tabIndex === -1 ? 0 : el.tabIndex;
          }
        } else {
          // 閉じている間はtabIndexを-1に
          if (!el.hasAttribute("data-orig-tabindex")) {
            el.setAttribute("data-orig-tabindex", el.tabIndex.toString());
          }
          el.tabIndex = -1;
        }
      });
    }
  }, [isOpen]);

  // スタイルの設定
  const labelStyle =
    "flex h-[40px] w-full items-center justify-between p-2 hover:bg-black-5-opacity focus-visible:bg-black-5-opacity active:bg-black-10-opacity";
  const iconStyle = cn(
    "material-symbols-rounded ml-1 flex select-none text-black-sub transition-all duration-300",
    isOpen ? "-rotate-180" : "rotate-0"
  );
  const containerStyle = cn(
    "transition-max-height overflow-hidden transition-all duration-300",
    isOpen ? "max-h-screen" : "max-h-0"
  );

  return (
    <li id={id} className={cn(className, "list-none")}>
      <div className="typo-body-md relative flex w-full cursor-pointer flex-col">
        <button
          onClick={() => toggleAccordion(!isOpen)}
          className={labelStyle}
          aria-expanded={isOpen}
        >
          <span className="truncate">{label}</span>
          <span className={iconStyle}>expand_more</span>
        </button>
        <div className={containerStyle} ref={contentRef}>
          {children}
        </div>
      </div>
    </li>
  );
};
Accordion.displayName = "Accordion";
