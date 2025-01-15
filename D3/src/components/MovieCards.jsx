import { Component } from "react";
import { Carousel, Row, Col, Card, Container } from "react-bootstrap";

class MovieCards extends Component {
  state = {
    index: 0,
    activeSlides: [],
    movies: [],
  };

  URL = "https://www.omdbapi.com/?i=tt3896198&apikey=4af2327&s=?";


  createSlides = (cards) => {
    const slides = [];
    for (let i = 0; i < cards.length - 6 + 1; i++) {
      slides.push(cards.slice(i, i + 6));
    }
    return slides;
  };


  getMovies = async (query) => {
    try {
      const response = await fetch(this.URL + query);
      if (response.ok) {
        const data = await response.json();
        const movies = data.Search;
       //console.log(data.Search);
        this.setState({
            movies,
            activeSlides: this.createSlides(movies),
        });
      } else {
        throw new Error("errore nel recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMovies(this.props.query);
    //console.log('nuovo')
  }



  handleSelect = (selectedIndex) => {
    this.setState({
      index: selectedIndex,
    });
  };

  render() {
    return (
      <Container className="px-5 mb-4" fluid>
        <h4>{this.props.title}</h4>
        <Carousel
          activeIndex={this.state.index}
          onSelect={this.handleSelect}
          slide={false}
          interval={2500}
        >
          {this.state.activeSlides.map((item, i) => (
            <Carousel.Item key={i}>
              <Row className="g-3">
                {item.map((element) => (
                  <Col key={element.imdbID} md={4} lg={2}>
                    <Card className="h-100 border-0 rounded-0">
                      <Card.Img
                        variant=""
                        src={element.Poster}
                        alt={element.Title}
                        height={160}
                        style={{
                            objectFit: 'cover',
                            objectPosition:'top'
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
  }
}

export default MovieCards;
