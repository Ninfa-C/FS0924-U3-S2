import { Alert, Container, Row, Col,Button } from "react-bootstrap";
import { useState } from 'react';

const Welcome = () => {
    const [show, setShow] = useState(true);
  return (
    <Container className="my-4">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={8} lg={6}>
          <Alert variant="success" show={show}>
            <h4>Benvenuto su Epibrary!</h4>
            <p>
              Scopri prodotti fantastici e offerte imperdibili. Siamo felici di
              averti qui!
            </p>
            <hr />
            <h5 className="text-center">
              Il posto giusto per trovare i migliori libri, gadget e tanto
              altro!
            </h5>
            <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
