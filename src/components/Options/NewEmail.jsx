import React, { useRef } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import "../forResponsive.css";
import { useDispatch } from "react-redux";
import emailThunk, { sendToRecepient } from "../../Store/emailThunk";

function NewEmail() {
  const { quill, quillRef } = useQuill();

  const toRef = useRef();
  const subjectRef = useRef();
  const dispatch = useDispatch();

  const sendEmailhandler = (event) => {
    event.preventDefault();

    const inputDetails = {
      to: toRef.current.value,
      subject: subjectRef.current.value,
      // body: quill.getText(),
      bodyHTML: quill.root.innerHTML,
    };
    // console.log(inputDetails);
    dispatch(emailThunk(inputDetails));
    dispatch(sendToRecepient(inputDetails));

    // quill.clipboard.dangerouslyPasteHTML("bodyHTML"); //! Set innerHTML using quill --- Main line 2
  };
  return (
    <>
      <div
        className='position-absolute distance-manager'
        style={{ top: "2rem", right: "2rem", left: "2rem" }}
      >
        <div className='w-100'>
          <div className='form-floating mb-3 '>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
              ref={toRef}
            />
            <label htmlFor='floatingInput'>To</label>
          </div>
          <div className='form-floating mb-4'>
            <input
              type='text'
              className='form-control'
              id='floatingtext'
              placeholder='text'
              ref={subjectRef}
            />
            <label htmlFor='floatingtext'>Subject</label>
          </div>
        </div>
        <div>
          <div style={{ height: 400 }}>
            <div ref={quillRef} />
          </div>
        </div>
        <div
          className='d-flex justify-content-between position-relative'
          style={{ cursor: "pointer", top: "4rem" }}
        >
          <button type='button' className='btn btn-success' onClick={sendEmailhandler}>
            Send
          </button>
          <button type='button' className='btn btn-danger'>
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default NewEmail;

//style={{ marginLeft: 250, marginTop: 0 }}

// obj = {
//   emailkey: {
//     inbox: {},
//     sent: {},
//     recyleBin: {}
//   }
// }
// sent = 'firebase.com/useremailkey/sent.json' => post
//inbox = 'firebase.com/emailkeytobesent/inbox.json' => post
