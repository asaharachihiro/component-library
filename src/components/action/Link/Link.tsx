import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../utils/cn";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
  className?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ asChild, className, children, target, ...props }, ref) => {
    const Component = asChild ? Slot : "a";
    const isBlank = target === "_blank";

    return (
      <Component
        ref={ref}
        target={target}
        rel={isBlank ? "noopener noreferrer" : props.rel}
        className={cn(
          "m-1 inline-flex items-center text-base font-bold text-link visited:text-link-visited",
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
      </Component>
    );
  }
);

Link.displayName = "Link";
