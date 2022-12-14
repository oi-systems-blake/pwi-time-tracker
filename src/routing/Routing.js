import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClockIn } from "../pages/ClockInPage/ClockIn"
import {App} from "./App"
import {ViewTimesheet} from "../pages/ViewTimesheet/ViewTimesheet";
import { AdminEmp } from "../pages/AdminEmp/AdminEmp"
import { AdminEmpDetail } from "../pages/AdminEmpDetail";
import { AdminProject } from "../pages/AdminProject/AdminProject";
import { AdminTimesheet } from "../pages/AdminTimesheet/AdminTimesheet";
import { AdminNavBar } from "../adminNavBar/AdminNavBar";



export function Routing() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ClockIn />} />
    <Route path="/viewtimesheet/:id" element={<ViewTimesheet  />} />
    <Route path="admin" element={<AdminNavBar />}>
    <Route path="employee" element={<AdminEmp/>}/>
    <Route path='employeedetails' element={<AdminEmpDetail/>}/>
    <Route path='projects' element={<AdminProject />}/>
    <Route path='timesheet' element={<AdminTimesheet />}/>
     </Route>
      </Routes>
    </BrowserRouter>
  );
}

