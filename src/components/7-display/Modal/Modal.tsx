import * as React from "react";
import { useClickOutside } from "../../../utils/useClickOutside";
import { cn } from "../../../utils/cn";
import { IconButton } from "../../1-action/IconButton";

interface ModalProps {
  id: string;
  title: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  onBeforeClose?: () => Promise<boolean>;
  children?: React.ReactNode;
  isDeletable?: boolean;
  confirmButton?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  id,
  className = "",
  title,
  isOpen,
  onClose,
  onBeforeClose,
  children,
  isDeletable = true,
  confirmButton,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleOutsideClick = async () => {
    if (onBeforeClose) {
      const shouldClose = await onBeforeClose();
      if (!shouldClose) return;
    }
    onClose();
  };

  useClickOutside(modalRef as React.RefObject<HTMLElement>, handleOutsideClick);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black-overlay transition-all duration-300",
        isOpen ? "animate-fadeIn" : "animate-fadeOut"
      )}
      onClick={handleOutsideClick}
    >
      <div
        id={id}
        ref={modalRef}
        className={cn(
          "shadow-lg relative z-50 overflow-auto rounded-lg bg-white shadow-high",
          isOpen ? "animate-fadeIn" : "animate-fadeOut",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex justify-between p-6 pb-0">
            <span className="text-lg font-bold">{title}</span>
            {isDeletable && (
              <IconButton
                id={"closeModal"}
                onClick={handleOutsideClick}
                icon="close"
                aria-label="closeModal"
              />
            )}
          </div>
          <div className="p-6">{children}</div>
          <div id={id} className={className}></div>
        </div>
        {confirmButton && (
          <div className="sticky bottom-0 flex w-full justify-end space-x-4 rounded-b-lg border-t border-black-20-opacity bg-white p-4">
            {confirmButton}
          </div>
        )}
      </div>
    </div>
  );
};
Modal.displayName = "Modal";
