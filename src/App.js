import React, { useState } from "react";
import Home from "./components/HomeComponent";
import Artist from "./components/ArtistsComponent";
import Playlist from "./components/PlaylistComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
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
    <div>
      <Navbar className="bg-danger" light expand="md">
        <NavbarBrand href="/home" className="mr-auto">
          SK's Music App
        </NavbarBrand>
        <NavbarToggler onClick={toggleNav} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/playlist">Playlist</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/artists">Artists</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/artists" component={Artist} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
