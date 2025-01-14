import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const AddComment = function (props) {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  });

  const sendComment = async (e) => {
    e.preventDefault();
    //console.log(comment);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg1MTRlMjM2NmU0MzAwMTU1NGZhMjMiLCJpYXQiOjE3MzY3NzQ4ODIsImV4cCI6MTczNzk4NDQ4Mn0.zo0OQvneUWvOVA3f1yeOrjJA7lamQbQ7W-2pjcNEQsc",
          },
        }
      );
      if (response.ok) {
        alert("Recensione inviata!"),
          setComment({
            comment: "",
            rate: 1,
            elementId: props.asin,
          });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: parseInt(e.target.value),
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
