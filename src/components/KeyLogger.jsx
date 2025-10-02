import { useState } from 'react';
import { useEventListener } from '../hooks/useEventListener';

export function KeyLogger() {
  const [key, setKey] = useState('');
  const [keyHistory, setKeyHistory] = useState([]);

  // Listen for keydown events on the entire window
  useEventListener('keydown', (event) => {
    setKey(event.key);
    setKeyHistory(prev => [...prev.slice(-9), event.key]); // Keep last 10 keys
  });

  const clearHistory = () => {
    setKey('');
    setKeyHistory([]);
  };

  return (
    <div className="keylogger-section">
      <h3>⌨️ Key Press Logger</h3>
      <p>Press any key on your keyboard and watch the magic!</p>
      
      <div className="key-display">
        <div className="current-key">
          <strong>Last Key Pressed:</strong>
          <span className="key-box">{key || 'None'}</span>
        </div>
        
        <div className="key-history">
          <strong>Last 10 Keys:</strong>
          <div className="history-box">
            {keyHistory.length > 0 ? (
              keyHistory.map((k, index) => (
                <span key={index} className="key-item">{k}</span>
              ))
            ) : (
              <span className="no-keys">No keys pressed yet</span>
            )}
          </div>
        </div>
      </div>

      <button onClick={clearHistory} className="clear-btn">
        Clear History
      </button>

      <div className="key-tips">
        <p><small>💡 Try: Arrow keys, Space, Enter, Letters, Numbers</small></p>
      </div>
    </div>
  );
}