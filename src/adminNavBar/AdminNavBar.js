
import logo from "../resources/pwi-logo.jpg"
import "./CustomNavBar.css"
import { Outlet } from "react-router-dom";
import { AdminEmp } from "../pages/AdminEmp/AdminEmp"
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';



export function AdminNavBar() {
    
    
    const {signOut, authStatus} = useAuthenticator((context) => [context.user]);
    const navigate = useNavigate();
    function logOut() {
        signOut();
        navigate('/');
      }
    return (
        <>
        <div className="adminNav">
        <div className="navbar-container">
          <div className="navbar-img">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="pwi logo"
            />
            </div>
          <div className="me-auto">
          <Link href="/admin/employee">Employees</Link>
          <Link href="/admin/projects">Projects</Link>
          <Link href="/admin/timesheet">Timesheet</Link>
          <button onClick={logOut}>Sign Out</button>
          </div>
        </div>
      </div>
      <Outlet/>
        </>
    );
}

