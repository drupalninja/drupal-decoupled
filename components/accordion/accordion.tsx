import React from 'react';
import { Accordion } from 'react-bootstrap';

interface AccordionItemProps {
  heading: string;
  content: React.ReactNode;
  accordionInstance: string;
}

interface AccordionProps {
  modifier?: string;
  accordionItems: AccordionItemProps[];
}

const AccordionComponent: React.FC<AccordionProps> = ({ modifier = '', accordionItems }) => {
  return (
    <div className={`mb-4 ${modifier}`}>
      <Accordion>
        {accordionItems.map((item, index) => (
          <Accordion.Item eventKey={`accordion-${index}`} key={index}>
            <h2 className="accordion-header">
              <Accordion.Button className="text-dark rounded p-3 pt-4 pb-4 fs-5 fw-semibold">
                {item.heading}
              </Accordion.Button>
            </h2>
            <Accordion.Collapse eventKey={`accordion-${index}`}>
              <div className="accordion-body">{item.content}</div>
            </Accordion.Collapse>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
