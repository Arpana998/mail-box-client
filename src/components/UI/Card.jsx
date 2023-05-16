import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../Store/modalSlice";
import "../forResponsive.css";
import { emailActions } from "../../Store/emailSlice";
import { updateData } from "../../Store/emailThunk";

function Card(props) {
  const dispatch = useDispatch();
  // const userData = useSelector((state) => state.email);

  const modalDisplayHandler = () => {
    // console.log("modalDisplayHandler clicked");
    // console.log(id, to, body, subject);

    const obj = {
      id: props.id,
      to: props.to,
      bodyHTML: props.bodyHTML,
      subject: props.subject,
      from: props.from,
      isRead: props.isRead,
    };
    dispatch(modalActions.emailDataToShow(obj));
    dispatch(modalActions.modalHandler());
    if (!props.isRead && props.from) {
      dispatch(emailActions.readEmailHandler(props.id));
    }
  };

  const deleteMailHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(emailActions.addToRecycleBin(props.id));
    dispatch(emailActions.deleteMail(props.id));
  };
  return (
    <div
      className='mt-0 w-100'
      // style={{ marginLeft: "15rem", marginTop: "0" }}
    >
      <div
        className='fs-6 font-monospace p-3 mb-3 bg-secondary text-white position-relative cursor-pointer'
        style={{ paddingRight: "1rem", borderRadius: "10px" }}
        onClick={() => {
          modalDisplayHandler();
        }}
      >
        {!props.isRead && props.from && (
          <span
            style={{ backgroundColor: "lime", color: "lime" }}
            className='badge  me-2 text-success position-absolute start-0 top-0'
          >
            .
          </span>
        )}

        <div>
          {props.to && (
            <>
              <span>To: </span> <span>{props.to}</span>
            </>
          )}
          {props.from && (
            <>
              <span>From: </span> <span>{props.from}</span>
            </>
          )}
        </div>
        <div>
          <span>Subject: </span> {props.subject}
        </div>

        <button
          type='button'
          className='btn btn-dark position-absolute'
          style={{ top: "1.4rem", right: "1rem" }}
          onClick={deleteMailHandler}
        >
          {props.action}
        </button>
      </div>
    </div>
  );
}

export default Card;
