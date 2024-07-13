import React from 'react';

interface VideoProps {
  video: string;
}

const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <div className="ratio ratio-16x9">
      {/* Render the video embed code */}
      <div dangerouslySetInnerHTML={{ __html: video }} />
    </div>
  );
};

export default Video;