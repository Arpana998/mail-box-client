import React from "react";

import { useSelector } from "react-redux";
import "../forResponsive.css";
import Card from "../UI/Card";

function RecycleBin() {
  const recyledEmails = useSelector((state) => Object.entries(state.email.recyclebin));

  return (
    <div className='distance-manager'>
      <h2 className='fs-1 text-decoration-underline mb-5'>Recyle Bin</h2>

      {recyledEmails.map((item) => {
        // console.log(item[1]);
        return (
          <Card
            id={item[0]}
            key={item[0]}
            from={item[1].from}
            to={item[1].to}
            subject={item[1].subject}
            bodyHTML={item[1].bodyHTML}
            isRead={item[1].isRead}
            action={"Delete"}
          />
        );
      })}
    </div>
  );
}

export default RecycleBin;
