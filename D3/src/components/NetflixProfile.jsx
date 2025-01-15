import { Component } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

class NetflixProfile extends Component {
  render() {
    return (
      <>
        <Container fluid={true}>
          <Row className=" flex-column align-items-center">
            <Col xs={4}>
              <h1 className="profile-title pb-3 my-3 border-custom">
                Edit Profile
              </h1>
              <Row>
                <Col lg={3}>
                  <Image src="..\public\assets\images\avatar.png" width={100} fluid/>
                </Col>
                <Col lg={9}>
                  <h3 className="text-bg-custom fw-light py-2 px-1 mb-3">
                    Ninfa
                  </h3>
                  <div className="pb-3 my-3 border-custom">
                    <p className=" opacity-50">Language</p>
                    <Form.Select
                      aria-label="language"
                      name="language"
                      size="sm"
                      className="text-white bg-black button-custom"
                    >
                      <option value="" disabled defaultValue={true}>
                        Choose
                      </option>
                      <option value="en">English</option>
                      <option value="it">Italian</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="pt">Portuguese</option>
                    </Form.Select>
                  </div>
                  <div className="pb-3 my-3 border-custom">
                    <p className="opacity-50 w-50">Maturity Settings:</p>
                    <Button
                      variant="dark"
                      type="button"
                      className="button-custom mb-3"
                    >
                      ALL MATURITY SETTINGS
                    </Button>
                    <p className="opacity-75">
                      {" "}
                      Show files for all maturity settings for this profile.
                    </p>
                    <Button
                      variant="outline-light"
                      type="button"
                      className="button-custom opacity-50"
                    >
                      EDIT
                    </Button>
                  </div>
                  <div className="pb-3 my3 border-custom">
                    <p className="opacity-50 w-50">Autopplay Controls:</p>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="custom-switch"
                        label="Autoplay next episode in a series on all devices"
                      />
                      <Form.Check
                        type="checkbox"
                        id="custom-switch2"
                        label="Autoplay previews while browsing on all devices."
                      />
                    </Form>
                  </div>
                </Col>
                <Row
                  className="p-0  my-3 d-md-flex w-100 justify-content-center"
                >
                  <Col xs={8} md={6} lg={3} className="mb-2 ">
                    <Button
                      type="button"
                      variant="outline-light"
                      className="button-custom fw-bold w-100"
                    >
                      SAVE
                    </Button>
                  </Col>

                  <Col xs={12} md={6} lg={3} className="mb-2 ">
                    <Button
                      type="button"
                      variant="outline-light"
                      className="button-custom opacity-50 w-100"
                    >
                      CANCEL
                    </Button>
                  </Col>

                  <Col xs={12} lg={6}>
                    <Button
                      type="button"
                      variant="outline-light"
                      className="button-custom opacity-50 w-100"
                    >
                      DELETE PROFILE
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default NetflixProfile;
