import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Home from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Manage from "./components/Corporation/Manage";
import BoardManage from "./components/Board/BoardManage";
import ZoneManage from "./components/Zone/ZoneManage";
import WardManage from "./components/Ward/WardManage";
import DepartmentManage from "./components/Department/DepartmentManage";
import StaffManage from "./components/Staff/StaffManage";
import DesignationManage from "./components/Designation/DesignationManage";
import TariffManage from "./components/Tariff/TariffManage";
import AccountManage from "./components/Account/AccountManage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home/>} />

         <Route path="/manage" element={<Manage/>} />
         <Route path="/BoardManage" element={<BoardManage/>} />
         <Route path="/WardManage" element={<WardManage/>}  />
         <Route path="/ZoneManage" element={<ZoneManage/>}  />
         <Route path="/DepartmentManage" element={<DepartmentManage/>} />
         <Route path="/StaffManage" element={<StaffManage/>} />
         <Route path="/DesignationManage" element={<DesignationManage/>} />
          <Route path="/TariffManage" element={<TariffManage/>} />
           <Route path="/AccountManage" element={<AccountManage/>} />

       </Routes>
    </BrowserRouter>
  );
}
export default App;
