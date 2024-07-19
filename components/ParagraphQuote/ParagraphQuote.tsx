import { FragmentOf, readFragment } from "gql.tada";
import { ParagraphQuoteFragment } from "@/graphql/fragments/paragraph";
import { getImageUrl } from "../helpers/Utilities";
import './ParagraphQuote.scss';

interface ParagraphQuoteProps {
  paragraph: FragmentOf<typeof ParagraphQuoteFragment>
  modifier?: string
}

export default function ParagraphQuote({ paragraph, modifier }: ParagraphQuoteProps) {
  const { author, jobTitle, logo, quote, thumb } = readFragment(ParagraphQuoteFragment, paragraph);
  const logoUrl = getImageUrl(logo);
  const thumbUrl = getImageUrl(thumb);
  
  return (
    <div className={`text-center d-flex justify-content-center ${modifier}`}>
      <div className="col-lg-10 col-xxxl-6">
        <div className="row">
          {logoUrl && (
            <div className="quote-logo col-lg-3 mx-auto mb-2">
              <img
                src={logoUrl}
              />
            </div>
          )}
          <blockquote className="blockquote fs-4 mb-3">
            <p className="p-3 fw-semibold d-flex align-items-center">
              {quote}
              <span className="material-symbols-outlined mb-3">format_quote</span>
            </p>
          </blockquote>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {thumbUrl && (
            <div className="quote-image me-3">
              <img
                src={thumbUrl}
              />
            </div>
          )}
          <div className="quote-text">
            {author && <div className="fw-semibold">{author}</div>}
            {jobTitle && <p className="fs-6">{jobTitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
