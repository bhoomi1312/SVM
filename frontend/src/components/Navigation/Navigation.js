import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './Navigation.css';
import logo from '../../static/logo.png';




const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" id="my-nav">
      <Navbar.Brand className="app-logo" href="/">
        <img
          src={logo}
          width="40"
          height="50"
          className="d-inline-block align-center"
          alt="Smart Water Meter Management System logo"
        />
        Smart Water Meter Management System
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Master" id="master-dropdown">
            <NavDropdown.Item href="/Manage">Corporation</NavDropdown.Item>
            <NavDropdown.Item href="/BoardManage">Board</NavDropdown.Item>
            <NavDropdown.Item href="/ZoneManage">Zone</NavDropdown.Item>
            <NavDropdown.Item href="/WardManage">Ward</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Organization" id="organization-dropdown">
            <NavDropdown.Item href="/DepartmentManage">Department</NavDropdown.Item>
            <NavDropdown.Item href="/DesignationManage">Designation</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="/StaffManage">Staff</Nav.Link>
          <NavDropdown title="Application" id="application-dropdown">
            <NavDropdown.Item href="/TariffManage">Tariff</NavDropdown.Item>
            <NavDropdown.Item href="/AccountManage">Account</NavDropdown.Item>
            <NavDropdown.Item href="/PaymentManage">Payment</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
