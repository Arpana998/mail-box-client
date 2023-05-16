import { emailActions } from "./emailSlice";

const emailThunk = (inputDetails) => {
  return async (dispatch) => {
    let useremail = localStorage.getItem("email");
    useremail = useremail.replace("@", "").replace(".", "");

    try {
      const response = await fetch(
        `https://mail-box-client-ee35e-default-rtdb.firebaseio.com/${useremail}/sent.json`,
        {
          method: "POST",
          body: JSON.stringify(inputDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("failed");
      } else {
        const res = await response.json();

        const temp = {
          id: res.name,
          inputDetails,
        };
        dispatch(emailActions.sentEmailHandler(temp));
      }
    } catch (err) {
      alert(err);
    }
  };
};

export const sendToRecepient = (inputDetails) => {
  return async () => {
    const obj = {
      from: localStorage.getItem("email"),
      subject: inputDetails.subject,
      bodyHTML: inputDetails.bodyHTML,
      isRead: false,
    };
    let useremail = inputDetails.to;
    useremail = useremail.replace("@", "").replace(".", "");

    try {
      const response = await fetch(
        `https://mail-box-client-ee35e-default-rtdb.firebaseio.com/${useremail}/inbox.json`,
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("failed");
      } else {
        const res = await response.json();
        console.log(res);
      }
    } catch (err) {
      alert(err);
    }
  };
};

export const fetchData = () => {
  let useremail = localStorage.getItem("email");
  useremail = useremail.replace("@", "").replace(".", "");
  console.log(useremail);

  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        `https://mail-box-client-ee35e-default-rtdb.firebaseio.com/${useremail}.json`
      );
      if (!response.ok) {
        throw new Error("not able to get data");
      }
      const data = await response.json();

      return data;
    };

    try {
      const receivedData = await getData();
      //   receivedData = receivedData

      dispatch(emailActions.replaceHandler(receivedData || {}));
    } catch (error) {
      alert(error);
    }
  };
};

export const updateData = (userData) => {
  return async (dispatch) => {
    let useremail = localStorage.getItem("email");
    useremail = useremail.replace("@", "").replace(".", "");

    try {
      const response = await fetch(
        `https://mail-box-client-ee35e-default-rtdb.firebaseio.com/${useremail}.json`,
        {
          method: "PUT",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("failed");
      }
      console.log("success put");
    } catch (err) {
      alert(err);
    }
  };
};

export default emailThunk;

//post req always give id in response
