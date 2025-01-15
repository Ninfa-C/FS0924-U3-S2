import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { TextLeft,Grid } from "react-bootstrap-icons";

class HeroSection extends Component {
  render() {
    return (
      <>
        <Container fluid className="justify-content-between align-items-center my-4">
          <Row>
            <Col className="d-flex align-items-center">
              <h1>TV Shows</h1>
              <Form.Select
                aria-label="genres"
                name="genres"
                size="sm"
                className="text-white bg-black ms-3"
              >
                <option value="" disabled defaultValue={true}>Genres</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="romance">Romance</option>
                <option value="thriller">Thriller</option>
                <option value="animation">Animation</option>
                <option value="documentary">Documentary</option>
              </Form.Select>
            </Col>
            <Col className="d-flex align-items-center w-auto" xs={1}>
            <TextLeft/>
            <Grid className="ms-3"/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HeroSection;
