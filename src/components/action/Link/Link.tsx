import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
  className?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : "a";

    return (
      <Component
        ref={ref}
        className={`text-main visited:text-danger underline underline-offset-2 ${
          className ?? ""
        }`}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";
