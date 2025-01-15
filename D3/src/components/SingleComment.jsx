import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    const Token = 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg3YjRlMTFhNjgzYjAwMTU5MjE3ODMiLCJpYXQiOjE3MzY5NDY5MTMsImV4cCI6MTczODE1NjUxM30.PXc78SEr8K8bcRf0M4jD2sIW_KSuOCvRZMaTYj7pS6M'
        
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: Token,
          },
        }
      )
      if (response.ok) {
        alert('La recensione è stata elimata!')
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item className='d-flex justify-content-between align-items-center bg-black border-1 text-white'>
      <p className='m-0'>{comment.comment}</p>
      <Button
        variant="danger"
        className="ms-auto w-auto"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment