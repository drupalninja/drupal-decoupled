import * as React from 'react';

interface HeadingProps {
  title: string;
  level?: string;
  modifier?: string;
  icon?: React.ReactNode;
  url?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, level = 'h2', modifier = '', icon, url }) => {
  const headingLevel = level as React.ElementType;

  return (
    <React.Fragment>
      {title && (
        React.createElement(headingLevel, { className: `heading ${modifier}` },
          icon,
          url ? <a href={url} className="text-decoration-none">{title}</a> : title
        )
      )}
    </React.Fragment>
  );
};

export default Heading;
