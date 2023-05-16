import { authActions } from "./authSlice";

const authenticateUser = (data) => {
  return async (dispatch) => {
    const sendUserData = async () => {
      let url;
      if (!data.signIn) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXbts1_mIjJAQyJmgTU6ReTLpaUcFWsWw";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXbts1_mIjJAQyJmgTU6ReTLpaUcFWsWw";
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: data.inputEmail,
          password: data.inputPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("authentication failed");
      }
      const res = await response.json();
      return res;
    };

    try {
      const userData = await sendUserData();
      console.log(userData);
      dispatch(
        authActions.login({
          email: userData.email,
          token: userData.idToken,
        })
      );
      //   dispatch(
      //     notifyActions.display({
      //       message: "Authentication Successful",
      //       status: "success",
      //     })
      //   );
    } catch (err) {
      alert(err);
      //   dispatch(
      //     notifyActions.display({
      //       message: "Authentication Failed",
      //       status: "Failed",
      //     })
      //   );
    }
  };
};

export default authenticateUser;
