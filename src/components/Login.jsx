import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import authenticateUser from "../Store/authThunk";
import { Icon } from "@iconify/react";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const auth = useSelector((state) => state.auth);

  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const signUpHandler = () => {
    setSignIn(!signIn);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const obj = {
      inputEmail: emailRef.current.value,
      inputPassword: passwordRef.current.value,
      signIn: signIn,
    };

    // authenticateUser({ email: inputEmail, password: inputPassword, signIn: signIn });
    dispatch(authenticateUser(obj)); //sending data to thunk
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container shadow p-5 rounded bg-white'>
        <form>
          {!signIn && (
            <div className='text-center pb-3'>
              <Icon className='login-icon' icon='material-symbols:lock-clock-rounded' />
            </div>
          )}
          {signIn && (
            <div className='text-center pb-3'>
              <Icon className='login-icon' icon='material-symbols:lock-open-right' />
            </div>
          )}
          <h3 className='text-center'>{signIn ? "Sign In" : "Sign Up"}</h3>
          <div className='mb-3'>
            <label htmlFor='email' className='mb-2'>
              Email
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              className='form-control'
              ref={emailRef}
              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='password' className='mb-2'>
              Password
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='form-control'
              ref={passwordRef}
              required
            />
          </div>
          {!signIn && (
            <div className='mb-2'>
              <label htmlFor='password' className='mb-2'>
                Confirm Password
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                className='form-control'
                required
              />
            </div>
          )}

          <div className='d-grid mt-4'>
            <button className='btn btn-primary' onClick={submitHandler}>
              {signIn ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <p className='text-end mt-3' onClick={signUpHandler}>
            {!signIn ? "Sign In" : "Sign Up"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
