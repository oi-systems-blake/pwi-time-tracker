
import logo from "../resources/pwi-logo.jpg"
import "./CustomNavBar.css"
import { Outlet } from "react-router-dom";
import { AdminEmp } from "../pages/AdminEmp/AdminEmp"
import { Link } from 'react-router-dom';



export function AdminNavBar() {
    


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
          <Link to="/admin/employee">Employees</Link>
          <Link to="/admin/projects">Projects</Link>
          <Link to="/admin/timesheet">Timesheet</Link>
          <button onClick={console.log("fix me please")}>Sign Out</button>
          </div>
        </div>
      </div>
      <Outlet/>
        </>
    );
}

