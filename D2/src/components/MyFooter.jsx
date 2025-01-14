import { Col, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <footer className=" bg-dark text-light py-5 text-opacity-50">
      <div className=" container-fluid px-5">
        <Row className="row border-bottom border-dark-subtle">
          <Col>
            <h4>Link Utili</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contatti
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Servizio Clienti</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Area Personale
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  I miei ordini
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Asistenza clienti
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Spese di consegna
                </a>
              </li>
            </ul>
          </Col>
          <Col className="d-none d-lg-block">
            <h4>Idee Regalo</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Idee regalo
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Corsi online
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Gadget
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  e-Reader
                </a>
              </li>
            </ul>
          </Col>
          <Col className="d-none d-md-block">
            <h4>Contatti</h4>
            <address className="text-light">
              <p> Via dei Libri,123, Torino</p>
              <p>
                <a
                  href="tel:+390612345678"
                  className="text-light text-decoration-none"
                >
                  +39 06 1234 5678
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@epibrary.it"
                  className="text-light text-decoration-none"
                >
                  info@epibrary.it
                </a>
              </p>
            </address>
          </Col>
        </Row>
        <Row className="my-3 d-flex justify-content-center">

            <h4 className=" d-inline w-auto">Seguici sui social</h4>
            <div className="d-flex gap-3 justify-content-center">
              <a href="#" className="text-light text-decoration-none">
                <i
                  className="bi bi-facebook"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="#" className="text-light text-decoration-none">
                <i
                  className="bi bi-instagram"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="#" className="text-light text-decoration-none">
                <i className="bi bi-twitter" style={{ fontSize: "1.5rem" }}></i>
              </a>
            </div>
        </Row>
        <Row className="text-center mt-4">
        <p className="mb-0">© 2025 Epibrary. Tutti i diritti riservati.</p>
        </Row>
      </div>
    </footer>
  );
};

export default MyFooter;
