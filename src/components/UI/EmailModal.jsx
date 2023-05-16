// import { Modal } from "bootstrap"; it gives error so make sure to do default import
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { modalActions } from "../../Store/modalSlice";

function EmailModal() {
  const displayModal = useSelector((state) => state.modal);
  const modalData = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (modalData.bodyHTML) {
      const editor = document.querySelector(".editor");
      editor.innerHTML = modalData.bodyHTML;

      // console.log(modalData.bodyHTML);
    }
  }, [modalData.bodyHTML]);

  const hideModalHandler = () => {
    dispatch(modalActions.modalHandler());
  };

  return (
    <>
      <Modal
        show={displayModal.modalShown}
        onHide={hideModalHandler}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Body>
          {modalData.to && (
            <div className='mb-4 fs-5'>
              <span className='fw-bolder me-3'>To:</span>
              {modalData.to}
            </div>
          )}
          {modalData.from && (
            <div className='mb-4 fs-5'>
              <span className='fw-bolder me-3'>From:</span>
              {modalData.from}
            </div>
          )}

          <div className='mb-4 fs-5'>
            <span className='fw-bolder me-3'>Subject:</span>
            {modalData.subject}
          </div>
          <div>
            <div className='mb-5' style={{ width: 750, height: 300 }}>
              <div className='editor' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModalHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmailModal;
