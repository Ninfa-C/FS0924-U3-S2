import {
    Card,
    Col,
    Container,
    Row,
    Badge,
    Button,
    CardGroup,
} from "react-bootstrap";
import Book from "../data/fantasy.json";
import './AllTheBooks.css'

const AllTheBoooks = function () {
    return (
        <>
            <Container className="my-3">
                <Row xs={2} md={3} lg={4} xl={5}>
                    {Book.map((item) => {
                        return (
                            <Col key={item.asin}>
                                <Card className="mb-3" style={{ height: "480px" }}>
                                    <Card.Img variant="top" src={item.img} alt={item.title} style={{ height: "300px", objectFit: "cover" }} />
                                    <Card.Body className="d-flex flex-column">
                                        <div>
                                            <Card.Title className="short">{item.title}</Card.Title>
                                            <Badge bg="warning" text="dark">
                                                {item.category}
                                            </Badge>
                                        </div>
                                        <CardGroup className="d-flex justify-content-center gap-2 mt-auto">
                                            <Button variant="danger" size="sm">
                                                <i className="bi bi-bag-plus" style={{ fontSize: "1rem" }}></i> Aggiungi
                                            </Button>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-bag-plus" style={{ fontSize: "1rem" }}></i> Scarta
                                            </Button>
                                        </CardGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default AllTheBoooks;