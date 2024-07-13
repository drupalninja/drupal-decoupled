import React, { FC } from 'react';

interface ModalProps {
  id: string;
  title: string;
  body: string;
  buttonText1: string;
  buttonText2: string;
  modifier: string;
}

const Modal: FC<ModalProps> = ({
  id,
  title,
  body,
  buttonText1,
  buttonText2,
  modifier
}) => {
  return (
    <>
      {/* Button trigger modal */}
      <button type="button" className={`btn ${modifier}`} data-bs-toggle="modal" data-bs-target={`#${id}`}>
        Launch demo modal
      </button>

      <div className="modal modal-lg fade" id={id} tabIndex={-1} aria-labelledby={`${id}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content p-2">
            <div className="modal-header pb-0 border-0">
              <h2 className="modal-title fs-4" id={`${id}Label`}>{title}</h2>
              <button type="button" className="btn-close p-0" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body pb-0 fs-6">
              {body}
            </div>
            <div className="modal-footer border-0">
              <a type="button" className="btn btn-outline-primary me-2" href="#" data-bs-dismiss="modal">{buttonText1}</a>
              <a type="button" className="btn btn-primary" href="#" data-bs-dismiss="modal">{buttonText2}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;