import * as React from "react";
import { cn } from "../../../utils/cn";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, children, target, ...props }, ref) => {
    const isBlank = target === "_blank";

    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={isBlank ? "noopener noreferrer" : props.rel}
        className={cn(
          "m-1 inline-flex cursor-pointer items-center text-base font-bold text-link visited:text-link-visited",
          className
        )}
        {...props}
      >
        <span className="mx-1 underline underline-offset-4">{children}</span>
        {isBlank && (
          <span className="material-symbols-rounded text-base icon-wght-500">
            <span className="align-middle">open_in_new</span>
          </span>
        )}
      </a>
    );
  }
);

Link.displayName = "Link";
