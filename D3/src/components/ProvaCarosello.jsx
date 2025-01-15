import { Component } from "react";
import { Carousel, Row, Col, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class MovieCarousel extends Component {
  state = {
    index: 0, // The index of the current active slide
    slides: [], // Array to hold all the slides (each slide is a group of 6 cards)
  };

  cards = [
    { id: 1, title: "Card 1", image: "https://via.placeholder.com/100" },
    { id: 2, title: "Card 2", image: "https://via.placeholder.com/200" },
    { id: 3, title: "Card 3", image: "https://via.placeholder.com/300" },
    { id: 4, title: "Card 4", image: "https://via.placeholder.com/400" },
    { id: 5, title: "Card 5", image: "https://via.placeholder.com/500" },
    { id: 6, title: "Card 6", image: "https://via.placeholder.com/600" },
    { id: 7, title: "Card 7", image: "https://via.placeholder.com/700" },
    { id: 8, title: "Card 8", image: "https://via.placeholder.com/800" },
    { id: 9, title: "Card 9", image: "https://via.placeholder.com/900" },
    { id: 10, title: "Card 10", image: "https://via.placeholder.com/150" },
  ];

  // Create an array of slides with 6 cards each
  createSlides = () => {
    const slides = [];
    for (let i = 0; i < this.cards.length - 6 + 1; i++) {
      slides.push(this.cards.slice(i, i + 6)); // Create chunks of 6 cards
    }
    return slides;
  };

  // Update the active slide when the carousel changes
  handleSelect = (selectedIndex) => {
    this.setState({
      index: selectedIndex, // Update the active slide index
    });
  };

  componentDidMount() {
    this.setState({
      slides: this.createSlides()
    });
  }

  render() {
    return (
      <Container className="my-5" fluid>
        <Carousel activeIndex={this.state.index} onSelect={this.handleSelect} slide={false}>
          {this.state.slides.map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <Row className="g-3">
                {slide.map((card) => (
                  <Col key={card.id} md={4} lg={2}>
                    <Card className="h-100">
                      <Card.Img
                        variant="top"
                        src={card.image}
                        alt={card.title}
                        style={{
                          objectFit: "cover",
                        }}
                        className="movieimg"
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
  }
}

export default MovieCarousel;
