import React, { useState } from "react";
import Home from "./components/HomeComponent";
import Artist from "./components/ArtistsComponent";
import Playlist from "./components/PlaylistComponent";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect, Switch } from "react-router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNav = () => setCollapsed(!collapsed);
  return (
    <>
      <Navbar className="navbar" dark expand="md">
        <div className="container">
          <NavbarBrand href="/home" className="mr-auto">
            <img src="/favicon.jpg" height="40px" width="40px" alt="logo"></img>
            <span className="navbar-brand">SK's Music App</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNav} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/home" className="navlink">
                  <span className="fa fa-home nav-text">
                    <span className="fontstyle"> Home</span>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/playlist">
                  <span className="fa fa-music nav-text">
                    <span className="fontstyle"> Playlist</span>
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/artists">
                  <span className="fa fa-info nav-text">
                    <span className="fontstyle"> Artists</span>
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/artists" component={Artist} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
