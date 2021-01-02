import React from "react";
import { Songs } from "../songsinfo";
import { Card, CardImg, CardTitle } from "reactstrap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Playlist() {
  const song = Songs.map((song) => {
    return (
      <div className="col-12 col-md-4" key={song.id}>
        <Card>
          <CardImg
            style={{ height: "250px" }}
            src={song.image}
            alt={song.name}
          />
          <CardTitle>
            <h5>{song.name}</h5>
          </CardTitle>
          <h6>{song.artist}</h6>
          <AudioPlayer src={song.song}></AudioPlayer>
        </Card>
      </div>
    );
  });
  return (
    <div className="bgstyle">
      <div className="container">
        <h1>Playlist</h1>
        <div className="row">{song}</div>
      </div>
    </div>
  );
}

export default Playlist;
