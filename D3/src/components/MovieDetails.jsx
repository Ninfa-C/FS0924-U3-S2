import { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentArea from "./CommentArea";

const MovieDetails = () => {
  const param = useParams();
  // console.log("PARAMS OBJECT", param.id);
  const [movie, setMovie] = useState({});

  const Omd = async () => {
    const URL = "https://www.omdbapi.com/?apikey=4af2327&i=";
    try {
      const response = await fetch(URL + param.id);
      if (response.ok) {
        const data = await response.json();
        setMovie(data);

        // console.log(movie);
      } else {
        throw new Error("errore nel recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Omd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="p-5">
      {console.log()}
      <Row>
        <Col xs={3}>
          <Image src={movie.Poster} alt={movie.Title} fluid />
        </Col>
        <Col xs={7}>
          <h1 className="title fs-3">{movie.Title}</h1>
          <p>Regia di {movie.Director}</p>
        </Col>
      </Row>
      <Row>
        <CommentArea />
      </Row>
    </Container>
  );
};

export default MovieDetails;
