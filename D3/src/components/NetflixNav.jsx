import { Component } from "react";
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import { BellFill, Search } from "react-bootstrap-icons";

class NetflixNav extends Component {
  state = {
    searchInput: "",
    fullBar: true,
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state.searchInput);
    this.props.searchSubmit(this.state.searchInput);
  };


  hide=()=>{
    this.setState({
      fullBar:false
    })
  }

  show=()=>{
    this.setState({
      fullBar:true
    })
  }

  render() {
    return (
      <>
        <Navbar expand="lg">
          <Container fluid={true}>
            <Navbar.Brand href="#" onClick={() => {
                              this.props.home(); 
                              this.show();
                            }}>
              <img
                src=".\public\assets\images\netflix_logo.png"
                alt="Netflix logo"
                width={100}
                className=" d-inline-block align-top"
              />
            </Navbar.Brand>
            {this.state.fullBar && (
              <>
                <Navbar.Toggle aria-controls="netflix-navbar-nav" />

                <Navbar.Collapse id="netflix-navbar-nav">
                  <Nav className=" me-auto">
                    <Nav.Link href="#" aria-current="Home">
                      Home
                    </Nav.Link>
                    <Nav.Link href="#" aria-current="Shows">
                      Tv Shows
                    </Nav.Link>
                    <Nav.Link href="#" aria-current="Movies">
                      Movies
                    </Nav.Link>
                    <Nav.Link href="#" aria-current="Recently added">
                      Recently added
                    </Nav.Link>
                    <Nav.Link href="#" aria-current="My List">
                      My List
                    </Nav.Link>
                  </Nav>

                  <Nav className="d-lg-flex justify-content-end align-items-center">
                    <Form
                      className="d-flex search-container"
                      onSubmit={this.submit}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className="ms-3"
                        aria-label="Search"
                        value={this.state.searchInput}
                        onChange={(e) => {
                          this.setState({
                            searchInput: e.target.value,
                          });
                        }}
                      />
                      <Button type="submit" variant="link">
                        <Search />
                      </Button>
                    </Form>

                    <Nav.Link
                      href="#"
                      aria-current="Kids Menu"
                      className="ms-2"
                    >
                      KIDS
                    </Nav.Link>
                    <BellFill className="ms-2" />
                    <Nav.Item className="d-flex flex-nowrap ms-3">
                      <Dropdown>
                        <Dropdown.Toggle
                          id="avatar-dropdown"
                          className=" bg-transparent border-0 p-0"
                        >
                          <img
                            src="../public/assets/images/avatar.png"
                            alt="User Avatar"
                            width={36}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu-start dropdown-menu-lg-end border-0 shadow-lg mt-0 bg-black text-white align-items-center">
                          <Dropdown.Header className=" d-flex align-items-center">
                            <div className="avatar-icon bg-light me-2"></div>
                            <h4 className="mb-0 fs-6">Ninfa</h4>
                          </Dropdown.Header>
                          <Dropdown.Item
                            className="nav-link px-2 mb-2"
                            href="#"
                            onClick={() => {
                              this.props.profile(); 
                              this.hide();
                            }}
                          >
                            Manage Profile
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="nav-link px-2 mb-2"
                            href="#"
                            onClick={() => {
                              this.props.profile(); 
                              this.hide();
                            }}
                          >
                            Account
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="nav-link px-2 mb-2"
                            href="#"
                            onClick={this.props.help}
                          >
                            Help Center
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item className="nav-link px-2" href="#">
                            Signout Netflix
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </>
            )}
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NetflixNav;
