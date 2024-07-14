import React from 'react';
import './Badge.scss';

interface BadgeProps {
  tag: string;
  modifier?: string;
}

const Badge: React.FC<BadgeProps> = ({ tag, modifier }) => {
  return (
    <span className={`badge rounded-pill d-block fs-7 px-2 py-1 fw-semibold${modifier ? ` ${modifier}` : ''}`}>{tag}</span>
  );
};

export default Badge;
