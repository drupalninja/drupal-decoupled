import React from 'react';

interface InlineNavigationProps {
  navItems: { text: string; url: string }[];
}

const InlineNavigation: React.FC<InlineNavigationProps> = ({ navItems }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Inline navigation
      </button>
      <ul className="dropdown-menu">
        {navItems.map((item, index) => (
          <li key={index}><a className="dropdown-item" href={item.url}>{item.text}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default InlineNavigation;
