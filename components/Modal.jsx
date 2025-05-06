export default function Modal({ show, onClose, title, children }) {
    if (!show) return null;
  
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };
  
    return (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          <h3 className="text-xl font-bold text-[#073859] mb-4">{title}</h3>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
  }