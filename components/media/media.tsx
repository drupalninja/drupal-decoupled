import React, { FC } from 'react';
import './Media.scss';

interface MediaProps {
  media: string;
}

const Media: FC<MediaProps> = ({ media }) => {
  return (
    <div className="media">
      {media}
    </div>
  );
};

export default Media;
