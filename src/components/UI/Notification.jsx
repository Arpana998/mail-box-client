import "./Notification.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { notifyActions } from "../Store/notification-slice";
import { Icon } from "@iconify/react";

const Notification = () => {
  const dispatch = useDispatch();

  const notifyStatus = useSelector((state) => state.notify);
  const notificationStatus = notifyStatus.status;
  const auth = useSelector((state) => state.auth);

  function manageNotify() {
    if (auth.isAuthenticated || !auth.isAuthenticated) {
      dispatch(notifyActions.hideDisplay());
    }
  }
  setTimeout(manageNotify, 3000);

  return (
    <>
      {notifyStatus.displayNotification && (
        <div
          className={`alert border-5 z-index-5 fixed-top float-end p-3 w-25 h-15 
          ${notificationStatus === "success" ? "alert-success" : "alert-danger"}`}
          role='alert'
        >
          <div className='fs-6 fw-bolder'>
            {notifyStatus.message}
            {notificationStatus === "success" ? (
              <Icon className='fs-3 ms-2' icon='mdi:success-bold' />
            ) : (
              <Icon className='fs-3 ms-2' icon='mdi:alpha-x' />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
