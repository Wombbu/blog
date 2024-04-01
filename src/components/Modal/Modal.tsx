import { button } from "@/essentials/theme/button";
import { typography } from "@/essentials/theme/typography";
import { MdClose } from "react-icons/md";
import React, { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

/**
 * Modal dialog using native <dialog /> element
 *
 * Scrolling is disabled on the html element when the modal is open via css in globals.css:
 *
 * html:has(dialog[open]:modal) {
 *   overflow: hidden;
 * }
 */
export const Modal = ({ isOpen, onClose, children }: Props) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (!modalElement) {
      return;
    }

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  return (
    <>
      {/* Modal dialog */}
      <dialog
        className=" bg-white w-11/12 md:max-w-md mx-auto my-auto p-8 backdrop:backdrop-blur-lg overscroll-contain backdrop:overscroll-contain"
        ref={modalRef}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            onClose();
          }
        }}
        onClick={() => onClose()}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <div className="flex">
            <h1
              className={`${typography.variants.sectionTitle({
                noGutter: true,
              })} mb-6 flex flex-1 items-start`}
            >
              Jaa artikkeli
            </h1>
            <button
              className={button.variants.iconButton()}
              onClick={() => onClose()}
            >
              <MdClose />
            </button>
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
};
