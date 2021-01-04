import React, { useState, useEffect } from "react";
import { Card, CardImg, Spinner } from "reactstrap";
import { Songs } from "../songsinfo";
function Playlist() {
  const [index, setIndex] = useState(0);
  const [pause, toggle] = useState(true);
  const [playtime, setPlaytime] = useState(0);
  const [myaudio, changeaudio] = useState(new Audio(Songs[index].song));
  const [repeat, setrepeat] = useState(false);

  const Repeatrnot = () => {
    if (!repeat) {
      return (
        <span
          className={"col-3 fa fa-lg fa-exchange"}
          style={{
            cursor: "pointer",
            paddingTop: "25px",
            color: "rgb(207, 207, 0)",
          }}
          onClick={() => {
            setrepeat(true);
          }}
        ></span>
      );
    } else {
      return (
        <span
          className={"col-3 fa fa-lg fa-exchange"}
          style={{
            cursor: "pointer",
            paddingTop: "25px",
            color: "#8f0000",
          }}
          onClick={() => {
            setrepeat(false);
          }}
        ></span>
      );
    }
  };

  useEffect(() => {
    changeaudio(new Audio(Songs[index].song));
    myaudio.load();
    myaudio.currentTime = 0;
    toggle(true);
    // eslint-disable-next-line
  }, [index]);

  myaudio.ontimeupdate = () => {
    setPlaytime(myaudio.currentTime);

    if (repeat) {
      if (myaudio.currentTime === myaudio.duration) {
        myaudio.currentTime = 0;
      }
    } else {
      if (myaudio.currentTime === myaudio.duration) {
        setIndex(Songs[index].next);
        toggle(true);
      }
    }
  };

  const Timedata = () => {
    var p = Math.floor(playtime);
    var m = Math.floor(p / 60);
    var s = (p % 60).toString().substring(0, 2);
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    return m + ":" + s;
  };

  const Spin = () => {
    if (!pause) {
      return (
        <div
          className="col-2"
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
          <strong>Current Song</strong>
        </h4>
        <Card className="card-d">
          <CardImg src={Songs[i].image} width="100%" height="300px" />
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
            <input
              type="range"
              min={0}
              max={myaudio.duration}
              step="any"
              value={playtime}
              onInput={(e) => {
                setPlaytime(e.target.value);
                myaudio.currentTime = playtime;
              }}
              style={{ width: "60%" }}
            />
            <span
              style={{
                color: "rgb(207, 207, 0)",
              }}
            >
              <Timedata />/{Songs[index].length}
            </span>
          </div>
          <div className="row">
            <Repeatrnot />
            <span
              className="fa fa-backward fa-lg col-2"
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
              className={"col-2 fa fa-lg " + (pause ? "fa-play" : "fa-pause")}
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                paddingBottom: "25px",
                paddingRight: "10px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                pause ? myaudio.play() : myaudio.pause();
                toggle(!pause);
              }}
            ></span>
            <span
              className="col-2 fa fa-forward fa-lg"
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                paddingBottom: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                setIndex(Songs[Songs[index].next].id);
                toggle(true);
              }}
            ></span>
            <a href={Songs[index].song} download={Songs[index].name}>
              <span
                className="fa fa-download fa-lg dbutton col-2"
                style={{
                  cursor: "pointer",
                  color: "rgb(207, 207, 0)",
                  paddingTop: "25px",
                  paddingBottom: "25px",
                }}
              ></span>
            </a>
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
              className="col-3"
              height="100px"
              style={{
                border: "2px solid rgb(207, 207, 0)",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            />
            <h6
              className="col-4"
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
              className="col-1 fa fa-forward fa-lg"
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                setIndex(Songs[Songs[index].next].id);
                toggle(true);
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
