import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

const Modal = forwardRef(({ children, buttonLabel }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return <dialog ref={dialog} className="p-4 rounded-md shadow-md backdrop:bg-stone-900/90">
    {children}
    <form method="dialog" className="mt-4 text-right">
        <Button>{buttonLabel}</Button>
    </form>
  </dialog>;
});

export default Modal;
