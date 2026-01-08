import * as React from "react";
import { cn } from "../../../utils/cn";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  className?: string;
  label: string;
  disabled?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, label, target, disabled, ...props }, ref) => {
    const isBlank = target === "_blank";

    // スタイルの設定
    const linkStyle = cn(
      "font-sans m-1 inline-flex items-center text-label-lg",
      className,
      {
        "cursor-pointer  text-link visited:text-link-visited": !disabled,
        "pointer-events-none text-black-20-opacity select-none": disabled,
      }
    );

    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={isBlank ? "noopener noreferrer" : props.rel}
        className={linkStyle}
        aria-disabled={disabled}
        {...props}
      >
        <span className="mx-1 underline underline-offset-4">{label}</span>
        {isBlank && (
          <span className="material-symbols-rounded text-body-md icon-wght-500">
            <span className="align-middle">open_in_new</span>
          </span>
        )}
      </a>
    );
  }
);

Link.displayName = "Link";
