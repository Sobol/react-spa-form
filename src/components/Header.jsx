import React from 'react';
import logo from './../images/logo.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header className="App-header">
        <Navbar fixed="top" color="dark" dark expand="md">
          <img src={logo} className="App-logo" alt="logo" />
          <NavbarBrand href="/">React SPA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/Sobol">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
