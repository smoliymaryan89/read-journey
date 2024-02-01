import { MouseEvent, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import clsx from "clsx";
import Icon from "./ui/Icon";

interface ModalProps {
  children: ReactNode;
  className?: string;
  handleModal: () => void;
}

interface KeyboardEvent {
  code: string;
}

const modalRoot = document.getElementById("modal-root") as HTMLElement;

const Modal = ({ handleModal, children, className }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        handleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleModal]);

  const onBackdropClick = (e: MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      handleModal();
    }
  };

  return createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-overlay flex items-center justify-center z-40"
      onClick={onBackdropClick}
    >
      <div
        className={clsx(
          "absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 py-[40px] rounded-12 border border-light-grey-20 flex flex-col items-center bg-light-dark w-[335px] sm:min-w-[calc(100vw-40px)] sm:w-0 md:py-[50px] md:w-[500px]",
          className
        )}
      >
        <button
          type="button"
          className="absolute top-[16px] right-[16px]"
          onClick={handleModal}
        >
          <Icon
            className="stroke-light-white"
            w={22}
            iconName="icon-close-menu"
          />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
