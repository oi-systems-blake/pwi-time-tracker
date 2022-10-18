import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routing } from "./routing/Routing"
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import TestClock from './routing/TestClock';
import { ViewTimesheet } from './pages/ViewTimesheet/ViewTimesheet';
import { ClockIn } from './pages/ClockInPage/ClockIn';
import { AdminProject } from './pages/AdminProject/AdminProject';



Amplify.configure(awsExports);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <React.StrictMode>
  <Routing/>
  </React.StrictMode>
  </>
);