import React, { FC } from 'react';

interface MediaProps {
  media: string;
}

const Media: FC<MediaProps> = ({ media }) => {
  return (
    <div className="media">
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: media }}></div>
    </div>
  );
};

export default Media;