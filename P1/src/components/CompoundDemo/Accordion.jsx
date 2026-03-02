import { createContext, useContext, useState } from 'react';

// Create context for sharing state between components
const AccordionContext = createContext();

// Main wrapper component
export function Accordion({ children, defaultOpen = [] }) {
  const [openItems, setOpenItems] = useState(defaultOpen);

  const toggleItem = (itemId) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId) 
        : [...prev, itemId]
    );
  };

  const isItemOpen = (itemId) => openItems.includes(itemId);

  const value = {
    openItems,
    toggleItem,
    isItemOpen
  };

  return (
    <AccordionContext.Provider value={value}>
      <div className="accordion">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

// Custom hook to use accordion context
function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be wrapped in <Accordion>');
  }
  return context;
}

// Item component
export function AccordionItem({ children, id }) {
  const { isItemOpen } = useAccordion();
  const isOpen = isItemOpen(id);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  );
}

// Trigger component (the clickable part)
export function AccordionTrigger({ children, id }) {
  const { toggleItem, isItemOpen } = useAccordion();
  const isOpen = isItemOpen(id);

  return (
    <button 
      className="accordion-trigger"
      onClick={() => toggleItem(id)}
      aria-expanded={isOpen}
    >
      {children}
      <span className="accordion-icon">
        {isOpen ? '▼' : '►'}
      </span>
    </button>
  );
}

// Content component (the expandable part)
export function AccordionContent({ children, id }) {
  const { isItemOpen } = useAccordion();
  const isOpen = isItemOpen(id);

  if (!isOpen) return null;

  return (
    <div className="accordion-content">
      {children}
    </div>
  );
}