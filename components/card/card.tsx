import React from 'react';
import Link from 'next/link';
import Badge from '../Badge/Badge';
import Button from '../button/button';
import Heading from '../heading/heading';

interface CardProps {
  modifier?: string;
  bodyModifier?: string;
  media?: React.ReactNode;
  mediaLink?: string;
  heading: {
    title: string;
    headingLevel?: '1' | '2' | '3' | '4' | '5' | '6';
    url?: string;
    modifier?: string;
  };
  layout?: string;
  tags?: string[];
  summaryText?: string;
  link?: {
    url: string;
    text: string;
  };
  link2?: {
    url: string;
    text: string;
  };
}

const Card: React.FC<CardProps> = ({
  modifier = '',
  bodyModifier = '',
  media,
  mediaLink,
  heading,
  layout = '',
  tags = [],
  summaryText = '',
  link,
  link2,
}) => {
  return (
    <div className={`card h-100 ${modifier}`}>
      {media && (
        <React.Fragment>
          {mediaLink ? (
            <Link href={mediaLink}>{media}</Link>
          ) : (
            media
          )}
        </React.Fragment>
      )}
      <div className={`card-body mt-2 ${bodyModifier}`}>
        {tags.length > 0 && (
          <ul className="list-inline mb-2">
            {tags.map((tag, index) => (
              <li key={index} className="list-inline-item">
                <Badge tag={tag} modifier="text-bg-primary" />
              </li>
            ))}
          </ul>
        )}
        <Heading
          title={heading.title}
          level={heading.headingLevel || '2'}
          url={heading.url}
          modifier={heading.modifier || 'card-title mb-3'}
        />
        <p className="card-text fs-6">{summaryText}</p>
        {(link || link2) && (
          <ul className="list-inline mb-0">
            {link && (
              <li className="list-inline-item">
                <Button
                  url={link.url}
                  text={link.text}
                  icon="arrow_right_alt"
                  modifier="btn-primary"
                />
              </li>
            )}
            {link2 && (
              <li className="list-inline-item">
                <Button
                  url={link2.url}
                  text={link2.text}
                  icon="arrow_right_alt"
                  modifier="btn-outline-primary"
                />
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
