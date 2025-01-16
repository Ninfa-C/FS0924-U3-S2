import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import { BellFill, Search } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

const NetflixNav = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    //console.log(searchInput);
    props.searchSubmit(searchInput);
  };

  const location = useLocation();

  return (
    <>
      <Navbar expand="lg">
        <Container fluid={true}>
          <Link to="/">
            <img
              src="/assets/images/netflix_logo.png"
              alt="Netflix logo"
              width={100}
              className=" d-inline-block align-top"
            />
          </Link>
          {location.pathname === "/" || location.pathname === "/Help" ? (
            <>
              <Navbar.Toggle aria-controls="netflix-navbar-nav" />

              <Navbar.Collapse id="netflix-navbar-nav">
                <Nav className=" me-auto">
                  <Link
                    to="/Tv-Shows"
                    aria-current="Shows"
                    className=" nav-link"
                  >
                    Tv Shows
                  </Link>
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
                    onSubmit={(e) => {
                      submit(e);
                    }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="ms-3"
                      aria-label="Search"
                      value={searchInput}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                      }}
                    />
                    <Button type="submit" variant="link">
                      <Search />
                    </Button>
                  </Form>

                  <Nav.Link href="#" aria-current="Kids Menu" className="ms-2">
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
                        <Link to="Profile" className="nav-link px-2 mb-2">
                          Manage Profile
                        </Link>
                        <Link to="Profile" className="nav-link px-2 mb-2">
                          Account
                        </Link>
                        <Link to="Help" className="nav-link px-2 mb-2" href="#">
                          Help Center
                        </Link>
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
          ) : null}
        </Container>
      </Navbar>
    </>
  );
};

export default NetflixNav;
