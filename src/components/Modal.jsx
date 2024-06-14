import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(({ children, buttonLabel }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return <dialog ref={dialog}>
    {children}
    <form method="dialog">
        <button>{buttonLabel}</button>
    </form>
  </dialog>;
});

export default Modal;
