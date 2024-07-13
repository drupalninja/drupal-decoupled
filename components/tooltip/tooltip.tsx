import React from 'react';

interface TooltipProps {
  title: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  return (
    <div className="col-9">
      <p className="muted">
        Placeholder text to demonstrate some
        <a href="#" data-bs-toggle="tooltip" data-bs-title={title}>
          {children}
        </a>
        with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of
        <a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip">
          real text
        </a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how
        <a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too">
          these tooltips on links
        </a>
        can work in practice, once you use them on
        <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!">
          your own
        </a>
        site or project.
      </p>
    </div>
  );
};

export default Tooltip;