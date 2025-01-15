import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Paypal } from "react-bootstrap-icons";

class NetflixHelp extends Component {
  render() {
    return (
      <>
        <Container
          fluid
          className="pt-4 bg-body text-black d-flex flex-column align-items-center"
        >
          <div className="w-75">
            <h2 className="dark-border-custom">Account</h2>

            <Row className="dark-border-custom ">
              <Col xs={12} md={3}>
                <h5 className="card-title opacity-25 mb-3">
                  MEMBERSHIP & BILLING
                </h5>
                <Button
                  type="button"
                  variant="dark"
                  className="button-custom cancel-btn mb-3"
                >
                  Cancel Membership
                </Button>
              </Col>
              <Col md={9}>
                <Row className=" dark-border-custom">
                  <Col xs={12} lg={6} className=" lh-1">
                    <p>
                      <strong>student@strive.school</strong>
                    </p>
                    <p className="opacity-50">Password: ********</p>
                    <p className="opacity-50">Phone: 321 044 1279</p>
                  </Col>
                  <Col
                    xs={12}
                    lg={6}
                    className="d-flex flex-column align-items-end"
                  >
                    <Button variant="link" type="button" className="pb-0">
                      Change account email
                    </Button>
                    <Button variant="link" type="button" className="pb-0">
                      Change password
                    </Button>
                    <Button variant="link" type="button" className="mb-0">
                      Change phone number
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={7}>
                    <span className="fw-bold">
                      <Paypal /> PayPal
                    </span>
                    <span className="fw-bold"> admin@strive.school</span>
                  </Col>
                  <Col xs={5} className="d-flex flex-column align-items-end">
                    <Button variant="link" type="button" className="pb-0">
                      Update payment info
                    </Button>
                    <Button variant="link" type="button" className="pb-0">
                      Billing details
                    </Button>
                  </Col>
                  <Row className="justify-content-end p-0">
                    <Col className="d-flex flex-column align-items-end p-0">
                      <Button
                        variant="link"
                        type="button"
                        className="pb-0 text-end"
                      >
                        Redeem giftcard or promo code
                      </Button>
                      <Button
                        variant="link"
                        type="button"
                        className="pb-0 text-end"
                      >
                        Where to buy gift cards?
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>

            <Row className=" rounded-1 dark-border-custom">
              <Col xs={12} md={3}>
                <h5 className=" card-title opacity-25"> SETTINGS</h5>
              </Col>
              <Col
                xs={12}
                md={9}
                lg={6}
                className="d-flex flex-column justify-content-start"
              >
                <Button
                  variant="link"
                  type="button"
                  className="ps-0 text-start"
                >
                  Parental Control
                </Button>
                <Button
                  variant="link"
                  type="button"
                  className="ps-0 text-start"
                >
                  Test partecipation
                </Button>
                <Button
                  variant="link"
                  type="button"
                  className="ps-0 text-start"
                >
                  Manage download devices
                </Button>
                <Button
                  variant="link"
                  type="button"
                  className="ps-0 text-start"
                >
                  Activate a device
                </Button>
                <Button
                  variant="link"
                  type="button"
                  className="ps-0 text-start"
                >
                  Recent device streaming activity
                </Button>
                <Button
                  variant="link"
                  type="button"
                  className="ps-0 text-start"
                >
                  Sign out of all devices
                </Button>
              </Col>
            </Row>

            <Row className=" rounded-1 mb-5 pb-5">
              <Col xs={12} md={3} className="mb-3">
                <h5 className=" card-title opacity-25"> MY PROFILE</h5>
              </Col>
              <Col xs={12} md={9}>
                <Row className="p-0 mb-2">
                  <Col className="d-flex align-items-start">
                    <span className="avatar-icon bg-light me-2"></span>
                    <p className="fw-bold"> Strive Student</p>
                  </Col>
                  <Col className="d-flex flex-column align-items-end">
                    <Button variant="link" type="button" className="pb-0">
                      Manage profile
                    </Button>
                    <Button variant="link" type="button" className="pt-0">
                      Add profile email
                    </Button>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12} md={5} className="d-flex flex-column">
                    <Button variant="link" type="button" className="pb-0">
                      Language
                    </Button>
                    <Button variant="link" type="button" className="pt-0">
                      Playback settings
                    </Button>
                    <Button variant="link" type="button" className="pb-0">
                      Subtitle appearance
                    </Button>
                  </Col>
                  <Col xs={12} md={5} className="d-flex flex-column">
                    <Button variant="link" type="button" className="pb-0">
                      Viewing activity
                    </Button>
                    <Button variant="link" type="button" className="pt-0">
                      Ratings
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default NetflixHelp;
