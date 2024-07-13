import React from 'react';

interface EmbedProps {
  embed: string;
}

const Embed: React.FC<EmbedProps> = ({ embed }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: embed }} />
  );
};

export default Embed;
