import React from 'react';
import classNames from 'classnames';

interface SideBySideProps {
  eyebrow?: string;
  title: string;
  media: React.ReactNode;
  body?: React.ReactNode;
  button?: {
    url: string;
    text: string;
    icon: string;
    modifier: string;
  };
  layout?: 'left' | 'right';
  modifier?: string;
}

const SideBySide: React.FC<SideBySideProps> = ({
  eyebrow,
  title,
  media,
  body,
  button,
  layout = 'left',
  modifier = '',
}) => {
  return (
    <div className={classNames('side-by-side', 'container', layout, modifier)}>
      <div className={classNames('row', 'flex-column', 'gy-3', { 'flex-lg-row-reverse': layout === 'right', 'flex-lg-row': layout === 'left' }, 'justify-content-between', 'align-items-center')}>
        <div className="col-lg-6">
          <div className="shadow rounded">{media}</div>
        </div>
        <div className="col-lg-6 col-xxl-5 d-flex flex-column gap-3">
          {eyebrow && (
            <div className="badge text-bg-secondary text-uppercase">{eyebrow}</div>
          )}
          <h2 className="mb-2">{title}</h2>
          {body && <div>{body}</div>}
          {button && (
            <a href={button.url} className={classNames('btn', button.modifier)}>
              {button.text}
              {button.icon && <span className="material-icons">{button.icon}</span>}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBySide;