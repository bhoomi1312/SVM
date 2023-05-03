import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Manage from "./components/Manage";
import BoardManage from "./components/BoardManage";
import ZoneManage from "./components/ZoneManage";
import WardManage from "./components/WardManage";
import DepartmentManage from "./components/DepartmentManage";
import StaffManage from "./components/StaffManage";
import DesignationManage from "./components/DesignationManage";
import TariffManage from "./components/TariffManage";
import AccountManage from "./components/AccountManage";

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
