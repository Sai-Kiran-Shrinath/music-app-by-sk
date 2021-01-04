import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { artists } from "../artists";

function Artist() {
  const artist = artists.map((artist) => {
    return (
      <div className="col-12 col-md-4" key={artist.id}>
        <br />
        <Card className="card">
          <a href={artist.url}>
            <CardImg
              className="card-image"
              src={artist.img}
              alt={artist.name}
            />
          </a>
          <CardTitle>
            <h5
              style={{
                fontWeight: "bold",
                color: "rgb(207, 207, 0)",
              }}
              className="text-center"
            >
              {artist.name}
            </h5>
          </CardTitle>
        </Card>
        <br />
      </div>
    );
  });

  return (
    <>
      <div className="bgstyle">
        <div className="container">
          <div className="row">{artist}</div>
        </div>
      </div>
      <footer className="footer text-center foot">
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/sai-kiran-shrinath-2048a0187/"
          className="foot"
        >
          <strong style={{ textDecoration: "none" }}>
            Designed & Developed by SK{" "}
          </strong>
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
      </footer>
    </>
  );
}

export default Artist;
