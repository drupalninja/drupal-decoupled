import React from 'react';
import './carousel.scss';

interface CarouselItemProps {
  active: boolean;
  image: string;
  title: string;
  caption: string;
}

interface CarouselProps {
  id: string;
  list: CarouselItemProps[];
}

const CarouselItem: React.FC<CarouselItemProps> = ({ active, image, title, caption }) => {
  return (
    <div className={`carousel-item ${active ? 'active' : ''}`}>
      {image && <div dangerouslySetInnerHTML={{ __html: image }} />}
      <div className="carousel-caption d-none d-md-block">
        {title && (
          <h3>
            {title}
          </h3>
        )}
        <p>{caption}</p>
      </div>
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ id, list }) => {
  return (
    <div id={`carousel-${id}`} className="carousel-single carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {list.map((item, index) => (
          <CarouselItem
            key={index}
            active={item.active}
            image={item.image}
            title={item.title}
            caption={item.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;