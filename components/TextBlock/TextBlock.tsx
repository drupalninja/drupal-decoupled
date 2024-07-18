import React from 'react';
import './TextBlock.scss';

interface TextBlockProps {
  heading?: {
    title?: string;
    level?: '1' | '2' | '3' | '4' | '5' | '6';
    modifier?: string;
  };
  bodyText?: string;
  link?: {
    url?: string;
    text?: string;
  };
  modifier?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({
  heading,
  bodyText,
  link,
  modifier = 'col-10 p-4',
}) => {
  return (
    <div className={`row ${modifier}`}>
      <div className="col-lg-10 mx-auto">
        {heading && (
          <h2 className={`mb-2 display-3 ${heading.modifier}`}>{heading.title}</h2>
        )}
        {bodyText && (
          <div dangerouslySetInnerHTML={{ __html: bodyText }}></div>
        )}
        {link?.url && (
          <div className="mt-3">
            <a href={link.url} className="btn btn-primary">
              {link.text || 'Read more'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextBlock;