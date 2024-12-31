import { useEffect } from "react";
import "./style.css";

// this is modal under development
const Modal = ({
  style,
  animation,
  size,
  show,
  onClose,
  title,
  children,
  overlay,
  headerIcon,
  confirmButton,
  cancelButton,
  showCloseBtn,
}) => {

  useEffect(() => {
    if (overlay == false) return;
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [show]);

  return (
    <div
      className={`modal-overlay ${show ? "show" : ""} ${overlay ? "" : "noOverlay"} ${animation ? "" : "noAnimation"} `}
      onClick={(e) => {
        if (onClose) onClose();
      }}
    >
      <div
        style={{ ...style, width: size ? size : "300px" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`custom_modal ${show ? "show" : ""}`}
      >
        {
          showCloseBtn &&
          <button
            className="modal-close-button"
            onClick={(e) => {
              if (onClose) onClose();
            }}
          >
            &times;
          </button>
        }

        {(title || headerIcon) && (
          <div className="modal-header">
            {headerIcon && <div>{headerIcon}</div>}
            <h5>{title}</h5>
          </div>
        )}

        <>{children}</>

        
        <div className="modal-buttons  m-0">
          {confirmButton && (
            <button
              className="modal-confirm-button"
              onClick={confirmButton.onClick}
              {...confirmButton.props}
            >
              {confirmButton.children}
            </button>
          )}

          {cancelButton && (
            <button
              {...cancelButton.props}
              className="modal-cancel-button"
              onClick={cancelButton.onClick}
            >
              {cancelButton.children}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
