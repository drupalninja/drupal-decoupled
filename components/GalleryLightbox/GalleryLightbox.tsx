import React from 'react';
import { Modal, Button } from 'react-bootstrap';

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
            <Modal id={item.id} show={false} onHide={() => { }}>
              <Modal.Header closeButton>
                <Modal.Title>{item.mediaDescription}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="gallery-body">{item.media}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => { }}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryLightbox;
