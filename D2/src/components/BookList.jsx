import { Container, Form, Col, Row, Button } from "react-bootstrap";
import "./AllTheBooks.css";
import SingleBook from "./SingleBook";
import { Component } from "react";
import Category from "./Category";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchInput: "",
    books: [],
    displayedBooks: [],
    selectedCategory: "",
    showComment: false,
    selected: "",
  };

  componentDidMount() {
    this.handleCategorySelect("Fantasy");
  }

  handleCategorySelect = (category) => {
    let books = [];
    switch (category) {
      case "Fantasy":
        books = fantasy;
        break;
      case "History":
        books = history;
        break;
      case "Horror":
        books = horror;
        break;
      case "Romance":
        books = romance;
        break;
      case "Scifi":
        books = scifi;
        break;
      default:
        books = fantasy;
    }

    this.setState({
      selectedCategory: category,
      books: books,
      displayedBooks: books,
      searchInput: "",
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    const { searchInput, books } = this.state;
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ displayedBooks: filteredBooks });
  };

  selected = (asin) => {
    if (this.state.selected !== asin) {
      this.setState({ selected: asin, showComment: true });
    } else {
      this.setState({ selected: "", showComment: false });
    }
  };

  //asin === this.state.selected? null : asin  avrei potuto mettere questo

  render() {
    return (
      <Container className="my-2">
        <Row>
          <Form onSubmit={this.handleSearch}>
            <Row className="justify-content-center mb-3">
              <Col xs={4}>
                <Form.Control
                  value={this.state.searchInput}
                  onChange={(e) =>
                    this.setState({ searchInput: e.target.value })
                  }
                  type="text"
                  placeholder="Search"
                />
              </Col>
              <Col xs="auto">
                <Button variant="dark" type="submit">
                  <i className="bi bi-search p-0"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>

        <Category cat={this.handleCategorySelect} />

        <Row>
          <Col>
            <Row xs={2} md={3} lg={4} xl={5}>
              {this.state.displayedBooks.map((book) => (
                <Col key={book.asin}>
                  <SingleBook
                    book={book}
                    selected={this.selected}
                    isSelected={this.state.selected === book.asin}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          {this.state.showComment && (
            <Col
              xs={12}
              md={2}
              className="container-fluid p-0 sticky-col"
            >
              <h2 className="text-center">Comment Section</h2>
              <CommentArea asin={this.state.selected} />
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default BookList;
