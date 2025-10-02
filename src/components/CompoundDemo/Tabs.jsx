import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

// Main Tabs wrapper
export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// Tabs List - contains the triggers
export function TabsList({ children }) {
  return (
    <div className="tabs-list">
      {children}
    </div>
  );
}

// Individual Tab trigger
export function Tab({ children, value }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button
      className={`tab ${activeTab === value ? 'active' : ''}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

// Tab content panel
export function TabPanel({ children, value }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;

  return (
    <div className="tab-panel">
      {children}
    </div>
  );
}