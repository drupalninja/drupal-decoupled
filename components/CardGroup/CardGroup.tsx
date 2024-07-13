import React from 'react';

interface CardProps {
  modifier?: string;
  media: string;
  heading: {
    title: string;
    headingLevel: number;
    url: string;
    modifier: string;
  };
  tags?: string[];
  summaryText?: string;
  link: {
    url: string;
    text: string;
  };
  link2?: {
    url: string;
    text: string;
  };
}

interface CardGroupProps {
  sectionTitle?: string;
  cardItems: CardProps[];
}

const Card: React.FC<CardProps> = ({
  modifier,
  media,
  heading,
  tags,
  summaryText,
  link,
  link2
}) => {
  return (
    <div className={`card ${modifier}`}>
      <div dangerouslySetInnerHTML={{ __html: media }} className="card-img-top" />
      <div className="card-body">
        <h2 className={`card-title ${heading.modifier}`}>
          <a href={heading.url}>{heading.title}</a>
        </h2>
        {tags && (
          <div className="card-tags mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-primary me-2">{tag}</span>
            ))}
          </div>
        )}
        {summaryText && <p className="card-text">{summaryText}</p>}
        <div className="card-links">
          <a href={link.url} className="btn btn-primary">
            {link.text}
          </a>
          {link2 && (
            <a href={link2.url} className="btn btn-outline-primary">
              {link2.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const CardGroup: React.FC<CardGroupProps> = ({ sectionTitle, cardItems }) => {
  return (
    <div className="card-group row">
      {sectionTitle && (
        <div className="col-12 mb-4 mb-lg-6 text-center">
          <h2 className="card-group-heading">{sectionTitle}</h2>
        </div>
      )}
      {cardItems.map((item, index) => (
        <div key={index} className="col-sm-6 col-lg-4 mb-4">
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
