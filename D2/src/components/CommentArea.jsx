/* eslint-disable no-unused-vars */
import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  getComment = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.asin,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg1MTRlMjM2NmU0MzAwMTU1NGZhMjMiLCJpYXQiOjE3MzY3NzQ4ODIsImV4cCI6MTczNzk4NDQ4Mn0.zo0OQvneUWvOVA3f1yeOrjJA7lamQbQ7W-2pjcNEQsc',
          },
        }
      )
      //console.log(response)
      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments: comments, isLoading: false, isError: false })
      } else {
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  componentDidMount() {
    this.getComment()
  }


componentDidUpdate(prevProps, prevState){
if(prevProps.asin!== this.props.asin)
  this.getComment()
}


  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments}/>
      </div>
    )
  }
}

export default CommentArea
