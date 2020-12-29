import React from "react";
import Home from "./components/HomeComponent";
import Artist from "./components/ArtistsComponent";
import Playlist from "./components/PlaylistComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
function App() {
  return (
    <div>
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
