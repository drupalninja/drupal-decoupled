import React, { useState } from 'react';

interface AccordionItemProps {
  heading: string;
  content: React.ReactNode;
  accordionInstance: string;
}

interface AccordionProps {
  modifier?: string;
  accordionItems: AccordionItemProps[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ heading, content, accordionInstance }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${accordionInstance}`}>
        <button
          className={`accordion-button ${isExpanded ? '' : 'collapsed'} p-3 pt-4 pb-4 fs-5 fw-semibold`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${accordionInstance}`}
          aria-expanded={isExpanded}
          aria-controls={`collapse-${accordionInstance}`}
          onClick={toggleExpansion}
        >
          {heading}
        </button>
      </h2>
      <div
        id={`collapse-${accordionInstance}`}
        className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
        aria-labelledby={`heading-${accordionInstance}`}
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ modifier = '', accordionItems }) => {
  return (
    <div className={`mb-4 ${modifier}`}>
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            heading={item.heading}
            content={item.content}
            accordionInstance={item.accordionInstance}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
