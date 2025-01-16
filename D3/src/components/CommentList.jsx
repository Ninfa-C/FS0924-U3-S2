import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = (props)=>{
  return(
 <ListGroup style={{ color: 'black' }} className="mt-5">
    {props.commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id}/>
    ))}
  </ListGroup>

  )
}

export default CommentList