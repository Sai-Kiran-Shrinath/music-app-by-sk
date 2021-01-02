import React, { useState, useRef } from "react";
import { Songs } from "../songsinfo";
import { Card, CardImg, CardTitle } from "reactstrap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Playlist() {
  const cur = (i) => {
    return (
      <img
        src={Songs[i].image}
        alt={Songs[i].name}
        width="50px"
        height="50px"
      />
    );
  };
  return (
    <>
      <div className="container">
        <div className="audio-player">
          <div className="container row">
            <span className="col-3">{cur(0)}</span>
            <div className="col-9">
              <AudioPlayer
                className="audio-tag"
                autoPlay
                src={Songs[0].song}
                onPlay={(e) => console.log("onPlay")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playlist;
