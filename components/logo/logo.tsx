import React, { FC } from 'react';

interface LogoProps {
  modifier?: string;
  siteLogo?: string;
}

const Logo: FC<LogoProps> = ({ modifier = 'col-3', siteLogo = './images/logo.svg' }) => {
  return (
    <div className={modifier}>
      <img src={siteLogo} className="logo w-100" alt="Site logo" />
    </div>
  );
};

export default Logo;