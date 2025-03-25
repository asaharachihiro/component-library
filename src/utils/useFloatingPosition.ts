import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";

export const useFloatingPosition = () => {
  const { x, y, refs, strategy, update } = useFloating({
    middleware: [offset(8), flip(), shift()],
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
  });

  return {
    x,
    y,
    reference: refs.reference,
    floating: refs.floating,
    strategy,
    update,
  };
};
