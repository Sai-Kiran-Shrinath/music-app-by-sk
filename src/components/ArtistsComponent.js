import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { artists } from "../artists";

function Artist() {
  const artist = artists.map((artist) => {
    return (
      <div className="col-12 col-md-4" id={artist.id}>
        <br />
        <Card>
          <a href={artist.url}>
            <CardImg
              style={{ height: "250px" }}
              src={artist.img}
              alt={artist.name}
            />
          </a>
          <CardTitle>
            <h5>{artist.name}</h5>
          </CardTitle>
        </Card>
        <br />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{artist}</div>
    </div>
  );
}

export default Artist;
