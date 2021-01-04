import React, { useState } from "react";
import Home from "./components/HomeComponent";
import Artist from "./components/ArtistsComponent";
import Playlist from "./components/PlaylistComponent";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect, Switch } from "react-router";
import { Songs } from "./songsinfo";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  // eslint-disable-next-line
  const [myaudio, changeaudio] = useState(new Audio(Songs[0].song));
  // eslint-disable-next-line
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const [pause, toggle] = useState(true);
  const toggleNav = () => setCollapsed(!collapsed);
  myaudio.play();
  return (
    <>
      <BrowserRouter>
        <Navbar className="navbar" dark expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto">
              <img
                src="/favicon.jpg"
                height="40px"
                width="40px"
                alt="logo"
              ></img>
              <span className="navbar-brand">SK's Music App</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNav} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/" className="navlink">
                    <span className="fa fa-home nav-text">
                      <span className="fontstyle"> Home</span>
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/playlist">
                    <span className="fa fa-music nav-text">
                      <span className="fontstyle"> Playlist</span>
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/artists">
                    <span className="fa fa-info nav-text">
                      <span className="fontstyle"> Artists</span>
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home
                myaudio={myaudio}
                index={index}
                setIndex={setIndex}
                pause={pause}
                toggle={toggle}
              />
            )}
          />
          <Route
            path="/playlist"
            component={() => (
              <Playlist
                myaudio={myaudio}
                index={index}
                setIndex={setIndex}
                pause={pause}
                toggle={toggle}
              />
            )}
          />
          <Route
            path="/artists"
            component={() => (
              <Artist
                myaudio={myaudio}
                index={index}
                setIndex={setIndex}
                pause={pause}
                toggle={toggle}
              />
            )}
          />
          <Redirect to="" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
