import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

const NetflixFooter = () => {
    return (
        <Container fluid className="px-5">
            <Row className="row-cols-1 row-cols-md-4 g-0">
                <Col>
                    <div className="social-icons mb-3 w-50 d-flex justify-content-around">
                        <Facebook/>
                        <Instagram/>
                        <TwitterX/>
                        <Youtube/>
                    </div>
                    <a className="nav-link px-2 mb-3" href="#" onClick={(e) => e.preventDefault()}>
                        Audio and Subtitles
                    </a>
                    <a className="nav-link px-2 mb-3" href="#"  onClick={(e) => e.preventDefault()}>
                        Media Center
                    </a>
                    <a className=" nav-link px-2 mb-3" href="#" onClick={(e) => e.preventDefault()}>
                        Privacy
                    </a>
                    <a className=" nav-link px-2 mb-3" href="#" onClick={(e) => e.preventDefault()}>
                        Contact Us
                    </a>
                    <Button
                        variant="outline-light"
                        className="mb-3 opacity-50"
                        type="button"
                    >
                        Service Code
                    </Button>
                    <p className="opacity-50">&copy; 1997 - 2025 Netflix Inc</p>
                </Col>
                <Col>
                    <a className=" nav-link px-2 mb-2" href="#"  onClick={(e) => e.preventDefault()}>
                        Audio Description
                    </a>
                    <a className=" nav-link px-2 mb-2" href="#"  onClick={(e) => e.preventDefault()}>
                        Investor Relations
                    </a>
                    <a className=" nav-link px-2 mb-2" href="#" onClick={(e) => e.preventDefault()}>
                        Legal Notices
                    </a>
                </Col>
                <Col>
                    <a className=" nav-link px-2 mb-2" href="#"  onClick={(e) => e.preventDefault()}>
                        Help Center
                    </a>
                    <a className=" nav-link px-2 mb-2" href="#"  onClick={(e) => e.preventDefault()}>
                        Jobs
                    </a>
                    <a className=" nav-link px-2 mb-2" href="#" onClick={(e) => e.preventDefault()}>
                        Cookie Preferences
                    </a>
                </Col>
                <Col>
                    <a className=" nav-link px-2 mb-2" href="#"  onClick={(e) => e.preventDefault()}>
                        Gift Cards
                    </a>
                    <a className=" nav-link px-2 mb-2" href="#" onClick={(e) => e.preventDefault()}>
                        Term Of Use
                    </a>
                    <a className=" nav-link px-2 mb-2" href="#"  onClick={(e) => e.preventDefault()}>
                        Corporate Information
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default NetflixFooter;
