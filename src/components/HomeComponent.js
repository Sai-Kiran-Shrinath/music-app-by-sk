import React, { useState, useEffect } from "react";
import { Card, CardImg } from "reactstrap";
import { Songs } from "../songsinfo";
function Home({ myaudio, index, setIndex, changeflag, pauseit }) {
  const [playtime, setPlaytime] = useState(0);
  const [repeat, setrepeat] = useState(false);

  useEffect(() => {
    if (myaudio.paused) {
      pauseit(true);
    } else {
      pauseit(false);
    }
    // eslint-disable-next-line
  }, [myaudio.paused]);

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

  myaudio.ontimeupdate = () => {
    setPlaytime(myaudio.currentTime);

    if (repeat) {
      if (myaudio.currentTime === myaudio.duration) {
        myaudio.play();
      }
    } else {
      if (myaudio.currentTime === myaudio.duration) {
        setIndex(Songs[index].next);
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
                changeflag(true);
                pauseit(false);
              }}
            ></span>
            <span
              className={
                "col-2 fa fa-lg " + (myaudio.paused ? "fa-play" : "fa-pause")
              }
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                paddingBottom: "25px",
                paddingRight: "10px",
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
              className="col-2 fa fa-forward fa-lg"
              style={{
                cursor: "pointer",
                paddingTop: "25px",
                paddingBottom: "25px",
                color: "rgb(207, 207, 0)",
              }}
              onClick={() => {
                setIndex(Songs[Songs[index].next].id);
                changeflag(true);
                pauseit(false);
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
        <div className="col-12 col-md">
          <div className="row playlist" style={{ cursor: "pointer" }}>
            <img
              src={Songs[Songs[index].next].image}
              alt={Songs[Songs[index].next].name}
              className="col-3 play-image"
              width="100%"
              height="80px"
              onClick={() => {
                setIndex(Songs[Songs[index].next].id);
                changeflag(true);
                pauseit(false);
              }}
            />
            <div className="col-6 text-center" style={{ color: "#070047" }}>
              <h6
                style={{ color: "rgb(207, 207, 0)", paddingTop: "20px" }}
                onClick={() => {
                  setIndex(Songs[Songs[index].next].id);
                  changeflag(true);
                  pauseit(false);
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
                changeflag(true);
              }}
            >
              {Songs[Songs[index].next].length}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const allsongs = Songs.map((song) => {
    return (
      <div className="col-12 cold-md playlist" style={{ cursor: "pointer" }}>
        <div className="row">
          <img
            src={song.image}
            alt={song.name}
            className="col-3 play-image"
            width="100%"
            height="110px"
            onClick={() => {
              setIndex(song.id);
              changeflag(true);
              pauseit(false);
            }}
          />
          <div className="col-5 text-center" style={{ color: "#070047" }}>
            <strong
              style={{ color: "rgb(207, 207, 0)" }}
              onClick={() => {
                setIndex(song.id);
                changeflag(true);
                pauseit(false);
              }}
            >
              {song.name}
            </strong>
            <p
              style={{ color: "#070047" }}
              onClick={() => {
                setIndex(song.id);
                pauseit(false);
              }}
            >
              {song.artist}
            </p>
          </div>
          <span
            style={{ color: "#070047", paddingTop: "25px" }}
            onClick={() => {
              setIndex(song.id);
              pauseit(false);
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
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
