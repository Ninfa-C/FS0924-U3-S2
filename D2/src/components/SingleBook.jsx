import { Card, Col, Badge, Button, CardGroup } from "react-bootstrap";
//import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  return (
    <Col>
      <Card
        className={`mb-3 ${props.isSelected ? "border border-danger" : ""}`}
        style={{
          height: "520px",
        }}
        onClick={() => props.selected(props.book.asin)}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          alt={props.book.title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <div>
            <Card.Title className="short">{props.book.title}</Card.Title>
            <Badge bg="warning" text="dark" className="mb-2">
              {props.book.category}
            </Badge>
          </div>
          <CardGroup className="d-flex justify-content-center gap-2 mt-auto">
            <Card.Text className=" mb-2 text-start me-auto fst-italic">
              {props.book.price}€
            </Card.Text>
            <CardGroup className="d-flex justify-content-center gap-2 mt-auto">
              <Button variant="danger" size="sm">
                <i className="bi bi-bag-plus" style={{ fontSize: "1rem" }}></i>{" "}
                Aggiungi
              </Button>
              <Button variant="outline-secondary" size="sm">
                <i className="bi bi-bag-plus" style={{ fontSize: "1rem" }}></i>{" "}
                Scarta
              </Button>
            </CardGroup>
          </CardGroup>
        </Card.Body>
      </Card>
      {/*state.selected && <CommentArea asin={props.book} />*/}
    </Col>
  );
};

export default SingleBook;
