import { Component } from "react";
import {
    Card,
    Col,
    Badge,
    Button,
    CardGroup,
} from "react-bootstrap";
//import CommentArea from "./CommentArea";

class SingleBook extends Component{

render(){
    return (
        <Col>
             <Card
          className={`mb-3 ${this.props.isSelected ? "border border-danger" : ""}`}
          style={{
            height: "520px"}}
            onClick={() => this.props.selected(this.props.book.asin)}
        >
                <Card.Img variant="top" src={this.props.book.img} alt={this.props.book.title} style={{ height: "300px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                    <div>
                        <Card.Title className="short">{this.props.book.title}</Card.Title>
                        <Badge bg="warning" text="dark" className="mb-2">
                            {this.props.book.category}
                        </Badge>
                        
                    </div>
                    <CardGroup className="d-flex justify-content-center gap-2 mt-auto">
                        <Card.Text className=" mb-2 text-start me-auto fst-italic">{this.props.book.price}€</Card.Text>
                        <CardGroup className="d-flex justify-content-center gap-2 mt-auto">
                            <Button variant="danger" size="sm">
                            <i className="bi bi-bag-plus" style={{ fontSize: "1rem" }}></i> Aggiungi
                        </Button>
                        <Button variant="outline-secondary" size="sm">
                            <i className="bi bi-bag-plus" style={{ fontSize: "1rem" }}></i> Scarta
                        </Button>
                        </CardGroup>
                        
                    </CardGroup>
                </Card.Body>
            </Card>
            {/*this.state.selected && <CommentArea asin={this.props.book} />*/}
        </Col>
    );
}

}

export default SingleBook