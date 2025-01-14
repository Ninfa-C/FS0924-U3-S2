import { Component} from "react";
import { Button,Row,Col   } from "react-bootstrap";

class Category extends Component {

  render() {
    return (
      <>
          <Row className="g-1 m-3" >
            <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => this.props.cat("Fantasy")}
              >
                Fantasy
              </Button>
              </Col>
              <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => this.props.cat("History")}
              >
                History
              </Button>
              </Col>
              <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => this.props.cat("Horror")}
              >
                Horror
              </Button>
              </Col>
              <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => this.props.cat("Romance")}
              >
                Romance
              </Button>
              </Col>
              <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => this.props.cat("Scifi")}
              >
                Scifi
              </Button>
            </Col>
          </Row>

      </>
    );
  }
}

export default Category;
