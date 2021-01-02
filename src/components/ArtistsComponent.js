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
    <div className="bgstyle">
      <div className="container">
        <div className="row">{artist}</div>
      </div>
    </div>
  );
}

export default Artist;
