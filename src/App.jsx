import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import SideBar from "./components/sideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Inbox from "./components/Options/Inbox";
import MailSent from "./components/Options/MailSent";
import NewEmail from "./components/Options/NewEmail";
import RecycleBin from "./components/Options/RecycleBin";
import EmailModal from "./components/UI/EmailModal";
import { createPortal } from "react-dom";
import { fetchData, updateData } from "./Store/emailThunk";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authentication = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.email);

  useEffect(() => {
    if (authentication) {
      dispatch(fetchData());
      navigate("/");
    }
  }, [authentication]);

  useEffect(() => {
    dispatch(updateData(userData));
  }, [userData.inbox, userData.recyclebin]);

  return (
    <>
      {authentication && <SideBar />}
      {createPortal(<EmailModal />, document.getElementById("emailModal"))}
      <Routes>
        <Route path='/auth' element={<Login />} />
        {authentication && <Route path='/' element={<Inbox />} />}
        {authentication && <Route path='/mailsent' element={<MailSent />} />}

        {authentication && <Route path='/newemail' element={<NewEmail />} />}
        {authentication && <Route path='/recyclebin' element={<RecycleBin />} />}
        {authentication && <Route path='*' element={<Navigate to='/' />} />}
        <Route path='*' element={<Navigate to='/auth' />} />

        {/* <Route path='/sidebar' element={<SideBar />} /> */}
      </Routes>
    </>
  );
}

export default App;

//render(<Example />);

//  <>
//       <button onClick={slideBarHandler}>Open</button>
//       {displaySlideBar && (
//         <div className='container-fluid'>
//           <div className='row'>
//             <div className='col-4 min-vh-100 bg-dark'>
//               <ul>
//                 <li>
//                   <a className=' nav-link px-2'>
//                     <i className='bi-house' />{" "}
//                     <span className='d-none d-sm-inline'>Home</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a className='nav-link px-2'>
//                     <i className='bi-house' />{" "}
//                     <span className='ms-1 d-none d-sm-inline'>About</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a className='nav-link px-2'>
//                     <i className='bi-house' />{" "}
//                     <span className='ms-1 d-none d-sm-inline'>Inbox</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a className='nav-link px-2'>
//                     <i className='bi-house' />{" "}
//                     <span className='ms-1 d-none d-sm-inline'>Sent</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
