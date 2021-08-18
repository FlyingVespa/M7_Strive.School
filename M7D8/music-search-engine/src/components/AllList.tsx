import { Result } from "../types/interfaces";
import { Card, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/style.css";

interface AllListProps {
  songs: Result[];
}

const AllList = ({ songs }: AllListProps) => {
  return (
    <>
      <Row>
        {songs.map((song) => (
          <Col lg={3} md={6} sm={12} key={song.id} className="mt-2">
            <Card style={{ width: "18rem" }} className="shadow-style">
              <Card.Img
                variant="top"
                src={song.album.cover_big}
                className="card-image-style"
              />
              <Card.Body>
                <Card.Title>Your title: {song.title}</Card.Title>
                <span className="subtitle">Artist:</span> {song.artist.name}{" "}
                <div>
                  <span className="subtitle">From album:</span>{" "}
                  {song.album.title}
                </div>
              </Card.Body>
            </Card>
            <Image src={song.artist.picture} alt="artist" id="artist-image" />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllList;
