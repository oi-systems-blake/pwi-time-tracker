import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Authenticator } from "@aws-amplify/ui-react";
import { Routing } from "./routing/Routing"
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import TestClock from './routing/TestClock';
import { ViewTimesheet } from './pages/ViewTimesheet/ViewTimesheet';
import { Login } from './routing/Login';
import { ClockIn } from './pages/ClockInPage/ClockIn';
import { AdminProject } from './pages/AdminProject/AdminProject';
import EmpQuery from "./graphql/custom/EmpQuery"
Amplify.configure(awsExports);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <React.StrictMode>

  <AdminProject/>

  </React.StrictMode>
  </>
);