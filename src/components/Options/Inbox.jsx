import React from "react";
import Card from "../UI/Card";
import "../forResponsive.css";
import { useSelector } from "react-redux";

function Inbox() {
  const sentEmails = useSelector((state) => Object.entries(state.email.inbox));
  return (
    <div className='distance-manager'>
      <h2 className='fs-1 text-decoration-underline mb-5'>Inbox</h2>

      {sentEmails.map((item) => (
        <Card
          id={item[0]}
          key={item[0]}
          from={item[1].from}
          subject={item[1].subject}
          bodyHTML={item[1].bodyHTML}
          isRead={item[1].isRead}
          action={"Delete"}
        />
      ))}
    </div>
  );
}

export default Inbox;
