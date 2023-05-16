import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./SideBar.css";
import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/authSlice";

function SideBar() {
  const [show, setShow] = useState(false);
  const [unRead, setUnRead] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const inboxData = useSelector((state) => Object.values(state.email.inbox));

  let count = 0;
  inboxData.forEach((e) => {
    if (!e.isRead) {
      count++;
    }
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/auth");
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive='md'>
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
          <div
            className='container bg-dark text-white position-fixed h-100 top-0 start-0 bottom-0'
            style={{ width: "14rem" }}
          >
            <div className='container p-3 mt-3 bg-dark text-center'>
              <h4>Mail Box Client</h4>
              <Icon className='g-mail-icon' icon='logos:google-gmail' />

              <p>By Arpana Chavan</p>
            </div>
            <div>
              {/* <ul className='list-group list-group-flush p-4 fw-bolder text-white'> */}
              <NavLink to={"/"}>
                <li className='list-group-item p-4 fw-bold bg-dark text-white'>
                  <Icon className='icon-indicator' icon='mdi:envelope' />
                  Inbox
                  <span className='badge bg-secondary ms-2'>{count}</span>
                </li>
              </NavLink>
              <NavLink to={"/mailsent"}>
                <li className='list-group-item p-4 fw-bold bg-dark text-white'>
                  <Icon className='icon-mail-sent' icon='bi:envelope-check-fill' />
                  Mails Sent
                </li>
              </NavLink>
              <NavLink to={"/newemail"}>
                <li className='list-group-item p-4 fw-bold bg-dark text-white'>
                  <Icon
                    className='icon-send-email'
                    icon='streamline:mail-send-email-send-email-paper-airplane'
                  />
                  Send Email
                </li>
              </NavLink>
              <NavLink to={"/recyclebin"}>
                <li className='list-group-item p-4 fw-bold bg-dark text-white'>
                  <Icon className='icon-indicator' icon='solar:trash-bin-trash-bold' />
                  Recycle Bin
                </li>
              </NavLink>
              {/* </ul> */}
            </div>
            <button
              type='button'
              className='btn btn-secondary btn-md shadow-lg'
              style={{ marginTop: "10rem", marginLeft: "3rem" }}
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
// className='card p-3 m-3 align-items-center bg-dark border-0'
//               style={{ width: "10rem", height: "10rem" }}
