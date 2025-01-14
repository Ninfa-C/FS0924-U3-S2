
import { Button,Row,Col   } from "react-bootstrap";

const Category =(props)=>{
    return (
      <>
          <Row className="g-1 m-3" >
            <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => props.cat("Fantasy")}
              >
                Fantasy
              </Button>
              </Col>
              <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => props.cat("History")}
              >
                History
              </Button>
              </Col>
              <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => props.cat("Horror")}
              >
                Horror
              </Button>
              </Col>
              <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => props.cat("Romance")}
              >
                Romance
              </Button>
              </Col>
              <Col xs='auto'>
              <Button
                variant="dark"
                onClick={() => props.cat("Scifi")}
              >
                Scifi
              </Button>
            </Col>
          </Row>

      </>
    );
  }


export default Category;
