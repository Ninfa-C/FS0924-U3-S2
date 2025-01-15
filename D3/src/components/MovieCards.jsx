import { useEffect, useState } from "react";
import { Carousel, Row, Col, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCards = (props) => {
  const [index, setIndex] = useState();
  const [activeSlides, setaAtiveSlides] = useState([]);
  const navigate = useNavigate();

  const URL = "https://www.omdbapi.com/?i=tt3896198&apikey=4af2327&s=?";

  const createSlides = (cards) => {
    const slides = [];
    for (let i = 0; i < cards.length - 6 + 1; i++) {
      slides.push(cards.slice(i, i + 6));
    }
    return slides;
  };

  const getMovies = async () => {
    try {
      const response = await fetch(URL + props.query);
      if (response.ok) {
        const data = await response.json();
        //console.log(data.Search);
        setaAtiveSlides(createSlides(data.Search));
        
      } else {
        throw new Error("errore nel recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    getMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.query]);



  return (
    <Container className="px-5 mb-4" fluid>
      <h4>{props.title}</h4>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        slide={false}
        interval={2500}
      >
        {activeSlides.map((item, i) => (
          <Carousel.Item key={i}>
            <Row className="g-3">
              {item.map((element) => (
                <Col key={element.imdbID} md={4} lg={2}>
                  <Card
                    className="h-100 border-0 rounded-0"
                    onClick={() => navigate("/MovieDetails/" + element.imdbID)}
                  >
                    <Card.Img
                      variant=""
                      src={element.Poster}
                      alt={element.Title}
                      height={160}
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      className="movieimg rounded-0"
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default MovieCards;
