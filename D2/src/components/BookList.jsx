import { Container, Form, Col, Row, Button } from "react-bootstrap";
import "./AllTheBooks.css";
import SingleBook from "./SingleBook";
import { useEffect, useState } from "react";
import Category from "./Category";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import CommentArea from "./CommentArea";

const BookList = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    selectedCategory: "",
    books: [],
    displayedBooks: [],
    searchInput: "",
  });
  const [showComment, setShowComment] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    handleCategorySelect("Fantasy");
  }, []);

  const handleCategorySelect = (category) => {
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

    setSelectedCategory({
      selectedCategory: category,
      books: books,
      displayedBooks: books,
      searchInput: "",
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredBooks = selectedCategory.books.filter((book) =>
      book.title
        .toLowerCase()
        .includes(selectedCategory.searchInput.toLowerCase())
    );
    setSelectedCategory({ ...selectedCategory, displayedBooks: filteredBooks });
  };

  const selectedAsin = (asin) => {
    if (selected !== asin) {
      setSelected(asin);
      setShowComment(true);
    } else {
      setSelected("");
      setShowComment(false);
    }
  };

  //asin === this.state.selected? null : asin  avrei potuto mettere questo

  return (
    <Container className="my-2">
      <Row>
        <Form onSubmit={handleSearch}>
          <Row className="justify-content-center mb-3">
            <Col xs={4}>
              <Form.Control
                value={selectedCategory.searchInput}
                onChange={(e) =>
                  setSelectedCategory({
                    ...selectedCategory,
                    searchInput: e.target.value,
                  })
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

      <Category cat={handleCategorySelect} />

      <Row>
        <Col>
          <Row xs={2} md={3} lg={4} xl={5}>
            {selectedCategory.displayedBooks.map((book) => (
              <Col key={book.asin}>
                <SingleBook
                  book={book}
                  selected={selectedAsin}
                  isSelected={selected === book.asin}
                />
              </Col>
            ))}
          </Row>
        </Col>
        {showComment && (
          <Col xs={12} md={2} className="container-fluid p-0 sticky-col">
            <h2 className="text-center">Comment Section</h2>
            <CommentArea asin={selected} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default BookList;
