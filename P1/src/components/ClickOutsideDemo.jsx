import { useState, useRef } from 'react';
import { useEventListener } from '../hooks/useEventListener';

export function ClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const modalRef = useRef();

  // Close modal when clicking outside
  useEventListener('click', (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  });

  // Count clicks anywhere on the page
  useEventListener('click', () => {
    setClickCount(prev => prev + 1);
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const resetClicks = () => {
    setClickCount(0);
  };

  return (
    <div className="click-outside-section">
      <h3>🖱️ Click Outside Demo</h3>
      
      <div className="click-stats">
        <p><strong>Total Clicks on Page:</strong> {clickCount}</p>
        <button onClick={resetClicks} className="small-btn">
          Reset Counter
        </button>
      </div>

      <button onClick={openModal} className="toggle-btn">
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div ref={modalRef} className="modal">
            <h4>Click Outside to Close!</h4>
            <p>This modal will close if you click anywhere outside of it.</p>
            <p>Try clicking the gray background!</p>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}