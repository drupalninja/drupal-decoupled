import React from 'react';
import Button, { ButtonProps } from '../Button/Button';
import './Hero.scss';

export interface HeroProps {
  modifier?: string;
  media?: React.ReactNode;
  title?: React.ReactNode;
  bodyText?: string;
  layout?: 'image_top' | 'image_bottom';
  button?: ButtonProps;
  button2?: ButtonProps;
}

const Hero: React.FC<HeroProps> = ({
  modifier,
  media,
  title,
  bodyText,
  layout = 'image_top',
  button,
  button2
}) => {
  return (
    <div className={`mb-6 mb-lg-12 text-center ${modifier || ''}`}>
      {layout === 'image_top' && media && (
        <div className="row">
          <div className="mb-4 mb-lg-8 d-flex justify-content-center align-items-center">
            <div className="shadow rounded">{media}</div>
          </div>
        </div>
      )}

      {title && (
        <div>
          <h1 className="heading display-5 fw-semibold mb-4 mb-lg-4" dangerouslySetInnerHTML={{ __html: title }}></h1>
        </div>
      )}

      <div className="col-lg-6 mx-auto">
        {bodyText && (
          <div className="lead mb-2 mb-lg-4">
            {bodyText}
          </div>
        )}

        {(button || button2) && (
          <div className="d-grid gap-2 d-flex justify-content-center">
            {button && (
              <Button
                url={button.url}
                text={button.text}
                icon={button.icon}
                modifier="btn-primary"
              />
            )}
            {button2 && (
              <Button
                url={button2.url}
                text={button2.text}
                icon={button2.icon}
                modifier="btn-outline-primary"
              />
            )}
          </div>
        )}
      </div>

      {layout === 'image_bottom' && media && (
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <div className="shadow rounded">{media}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
