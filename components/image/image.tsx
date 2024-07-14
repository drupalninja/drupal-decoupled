import React from 'react';
import Image from 'next/image';
import './Image.scss';

interface ImageProps {
  src: string;
  alt: string;
}

const CustomImage: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Image src={src} alt={alt} className="img-fluid rounded" />
  );
};

export default CustomImage;
