import React, { useState, useEffect } from "react";
import { Card, CardImg, Spinner } from "reactstrap";
import { Songs } from "../songsinfo";
function Playlist() {
  const [index, setIndex] = useState(0);
  const [pause, toggle] = useState(true);
  const [myaudio, changeaudio] = useState(new Audio(Songs[index].song));

  useEffect(() => {
    toggle(true);
    myaudio.load();
    changeaudio(new Audio(Songs[index].song));
  }, [index]);

  const Spin = () => {
    if (!pause) {
      return (
        <div
          className="col-1"
          style={{ paddingTop: "17px", paddingLeft: "20px" }}
        >
          {" "}
          <Spinner color="warning"></Spinner>
        </div>
      );
    } else {
      return <></>;
    }
  };

  const currentSong = (i) => {
    return (
      <div className="col-12 col-md-4 text-center">
        <br />
        <h4>
          <strong>Now Playing</strong>
        </h4>
        <Card className="card-d">
          <CardImg src={Songs[i].image} width="100%" />
          <h5
            style={{
              fontWeight: "bold",
              color: "rgb(207, 207, 0)",
            }}
          >
            {Songs[i].name}
          </h5>
          <p
            style={{
              fontWeight: "bold",
              color: "rgb(207, 207, 0)",
            }}
          >
            By {Songs[i].artist} - {Songs[i].released}
          </p>
          <div className="row justify-content-center">
            <span
              className="fa fa-step-backward fa-lg col-1"
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                paddingBottom: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                setIndex(Songs[Songs[index].prev].id);
                toggle(true);
              }}
            ></span>
            <span
              className={"col-1 fa fa-lg " + (pause ? "fa-play" : "fa-pause")}
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                paddingBottom: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                pause ? myaudio.play() : myaudio.pause();
                toggle(!pause);
              }}
            ></span>
            <span
              className="col-1 fa fa-step-forward fa-lg"
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                paddingBottom: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                setIndex(Songs[Songs[index].next].id);
                toggle(true);
                myaudio.play();
              }}
            ></span>
          </div>
        </Card>
        <br />
        <br />
        <h4>
          <strong>Coming Up Next</strong>
        </h4>
        <div className="row playlist" style={{ cursor: "pointer" }}>
          <img
            src={Songs[Songs[index].next].image}
            alt={Songs[Songs[index].next].name}
            className="col-3 play-image"
            width="100%"
            height="80px"
            onClick={() => {
              setIndex(Songs[Songs[index].next].id);
            }}
          />
          <div className="col-6 text-center" style={{ color: "#070047" }}>
            <h6
              style={{ color: "rgb(207, 207, 0)", paddingTop: "20px" }}
              onClick={() => {
                setIndex(Songs[Songs[index].next].id);
              }}
            >
              <strong>{Songs[Songs[index].next].name}</strong>
            </h6>
          </div>
          <span
            className="col-2"
            style={{ color: "#070047", paddingTop: "25px" }}
            onClick={() => {
              setIndex(Songs[Songs[index].next].id);
            }}
          >
            {Songs[Songs[index].next].length}
          </span>
        </div>
      </div>
    );
  };

  const allsongs = Songs.map((song) => {
    return (
      <div className="row playlist" style={{ cursor: "pointer" }}>
        <img
          src={song.image}
          alt={song.name}
          className="col-3 play-image"
          width="100%"
          height="80px"
          onClick={() => {
            setIndex(song.id);
          }}
        />
        <div className="col-6 text-center" style={{ color: "#070047" }}>
          <h6
            style={{ color: "rgb(207, 207, 0)" }}
            onClick={() => {
              setIndex(song.id);
            }}
          >
            <strong>{song.name}</strong>
          </h6>
          <p
            onClick={() => {
              setIndex(song.id);
            }}
          >
            {song.artist}
          </p>
        </div>
        <span
          style={{ color: "#070047", paddingTop: "25px" }}
          onClick={() => {
            setIndex(song.id);
          }}
        >
          {song.length}
        </span>
        <a href={song.song} download={song.name}>
          <span
            className="fa fa-download fa-lg dbutton"
            style={{ color: "#070047", paddingLeft: "30px" }}
          ></span>
        </a>
      </div>
    );
  });
  return (
    <div className="bgstyle">
      <div className="container">
        <div className="row">
          {currentSong(index)}
          <div className="col-0 col-md-1"></div>
          <div className="col-12 col-md">
            <br />
            <h4 className="text-center">
              <strong>All songs</strong>
            </h4>
            {allsongs}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <footer className="audio-player">
        <div className="container">
          <div className="row">
            <img
              src={Songs[index].image}
              alt={Songs[index].name}
              className="col-1"
              height="60px"
              style={{
                border: "2px solid rgb(207, 207, 0)",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            />
            <h6
              className="col-6"
              style={{ color: "rgb(207, 207, 0)", paddingTop: "20px" }}
            >
              <strong>{Songs[index].name}</strong>
            </h6>
            <span
              className="fa fa-step-backward fa-lg col-1"
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                setIndex(Songs[Songs[index].prev].id);
                toggle(true);
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
                pause ? myaudio.play() : myaudio.pause();
                toggle(!pause);
              }}
            ></span>
            <span
              className="col-1 fa fa-step-forward fa-lg"
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                setIndex(Songs[Songs[index].next].id);
                toggle(true);
                myaudio.play();
              }}
            ></span>
            <Spin />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Playlist;
