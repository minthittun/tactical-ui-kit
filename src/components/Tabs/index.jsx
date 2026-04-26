import React, { useState } from 'react';

const Tabs = ({ tabs, defaultTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.value);

  const handleTabClick = (tab) => {
    setActiveTab(tab.value);
    onChange?.(tab);
  };

  const activeContent = tabs.find(t => t.value === activeTab)?.content;

  return (
    <div className="hrms-tabs">
      <div className="hrms-tabs-header">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={`hrms-tab ${activeTab === tab.value ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="hrms-tabs-content">
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;