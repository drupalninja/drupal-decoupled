import React from 'react';

interface GalleryLightboxProps {
  sectionTitle?: string;
  introText?: string;
  galleryItems: {
    id: string;
    media: React.ReactNode;
    mediaThumb: React.ReactNode;
    mediaDescription: string;
  }[];
  modifier?: string;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  sectionTitle,
  introText,
  galleryItems,
  modifier = 'p-2',
}) => {
  return (
    <div className={modifier}>
      {sectionTitle && (
        <div className="mb-4 text-md-center">
          <h2>{sectionTitle}</h2>
        </div>
      )}
      {introText && (
        <div className="d-flex justify-content-center">
          <div className="text-md-center pb-3 col-md-8">
            <div dangerouslySetInnerHTML={{ __html: introText }} />
          </div>
        </div>
      )}
      <div className="row">
        {galleryItems.map((item) => (
          <div key={item.id} className="col-6 col-md-3 mb-3">
            <a href={`#${item.id}`} role="button" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
              {item.mediaThumb}
            </a>
            <div id={item.id} className="modal fade" tabIndex={-1} aria-labelledby={item.id} aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{item.mediaDescription}</h5>
                  </div>
                  <div className="modal-body gallery-body">{item.media}</div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryLightbox;