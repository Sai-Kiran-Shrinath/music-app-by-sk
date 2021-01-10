import React, { useState, useEffect } from "react";
import Home from "./components/HomeComponent";
import Artist from "./components/ArtistsComponent";
import SongInfo from "./components/SongInfoComponent";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect, Switch } from "react-router";
import { Songs } from "./songsinfo";
import { Spinner } from "reactstrap";
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
  const [flag, changeflag] = useState(false);
  const toggleNav = () => setCollapsed(!collapsed);
  const [pause, pauseit] = useState(true);
  myaudio.preload = "auto";
  useEffect(() => {
    myaudio.src = Songs[index].song;
    if (flag) {
      myaudio.play();
    }
    // eslint-disable-next-line
  }, [index]);

  const Spin = () => {
    if (!pause) {
      return (
        <div className="col-2" style={{ paddingTop: "17px" }}>
          {" "}
          <Spinner color="warning"></Spinner>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar className="navbar" dark expand="md">
          <div className="container">
            <NavLink to="/" className="navlink">
              <NavbarBrand className="mr-auto">
                <img
                  src="/favicon.jpg"
                  height="40px"
                  width="40px"
                  alt="logo"
                ></img>
                <span className="navbar-brand">SK's Music App</span>
              </NavbarBrand>
            </NavLink>
            <NavbarToggler onClick={toggleNav} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                {"  "}
                <NavItem>
                  <NavLink to="/" className="navlink">
                    <span className="fa fa-home nav-text">
                      <span className="fontstyle"> Home</span>
                    </span>
                  </NavLink>
                </NavItem>
                {"  "}
                <NavItem>
                  <NavLink to="/playlist">
                    <span className="fa fa-info nav-text">
                      <span className="fontstyle"> Info</span>
                    </span>
                  </NavLink>
                </NavItem>
                {"  "}
                <NavItem>
                  <NavLink to="/artists">
                    <span className="fa fa-user-circle-o nav-text">
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
                changeflag={changeflag}
                pauseit={pauseit}
              />
            )}
          />
          <Route
            path="/playlist"
            component={() => (
              <SongInfo myaudio={myaudio} index={index} setIndex={setIndex} />
            )}
          />
          <Route
            path="/artists"
            component={() => (
              <Artist myaudio={myaudio} index={index} setIndex={setIndex} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>

      <div
        className="footer text-center foot"
        style={{ paddingBottom: "20px" }}
      >
        <a
          href="https://www.linkedin.com/in/sai-kiran-shrinath-2048a0187/"
          style={{ color: "floralwhite", textDecoration: "none" }}
        >
          <strong>Designed & Developed by SK </strong>
          <img
            src="/images/sk.jpeg"
            width="100px"
            height="100px"
            alt="sk"
            style={{
              border: "2px solid  rgb(255, 217, 0)",
              borderRadius: "100%",
            }}
          />
        </a>
      </div>
      <br />
      <br />
      <footer className="audio-player">
        <div className="container text-center">
          <div className="row">
            <img
              src={Songs[index].image}
              alt={Songs[index].name}
              className="col-2"
              height="66px"
              style={{
                border: "2px solid rgb(207, 207, 0)",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            />
            <h6
              className="col-5"
              style={{ color: "rgb(207, 207, 0)", paddingTop: "20px" }}
            >
              <strong>{Songs[index].name}</strong>
            </h6>
            <span
              className="fa fa-backward fa-lg col-1"
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                setIndex(Songs[Songs[index].prev].id);
                changeflag(true);
                pauseit(false);
              }}
            ></span>
            <span
              className={"col-1 fa fa-lg " + (pause ? "fa-play" : "fa-pause")}
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                myaudio.paused ? myaudio.play() : myaudio.pause();
                changeflag(true);
                if (myaudio.paused) {
                  pauseit(true);
                } else {
                  pauseit(false);
                }
              }}
            ></span>
            <span
              className="col-1 fa fa-forward fa-lg"
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                setIndex(Songs[Songs[index].next].id);
                changeflag(true);
                pauseit(false);
              }}
            ></span>
            <Spin />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
