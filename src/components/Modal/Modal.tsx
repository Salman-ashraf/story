import React from 'react';
import './Modal.css';

export type ModalProps = {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  width?: string;
};

const Modal: React.FC<ModalProps> = ({ open, title, children, onClose, width = '500px' }) => {
  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" style={{ width }}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
