import React from 'react';

interface PopoverProps {
  title: string;
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'click' | 'hover' | 'focus' | 'manual';
  boundary?: 'scrollParent' | 'window' | 'viewport';
  popoverAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

const Popover: React.FC<PopoverProps> = ({
  title,
  content,
  placement = 'top',
  trigger = 'click',
  boundary = 'scrollParent',
  popoverAttributes,
}) => {
  return (
    <div
      className={`popover bs-popover-${placement}`}
      role="tooltip"
      data-bs-toggle="popover"
      data-bs-trigger={trigger}
      data-bs-boundary={boundary}
      {...popoverAttributes}
    >
      <div className="popover-arrow"></div>
      <h3 className="popover-header">{title}</h3>
      <div className="popover-body">{content}</div>
    </div>
  );
};

export default Popover;