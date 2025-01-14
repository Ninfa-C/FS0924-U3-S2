/* eslint-disable no-unused-vars */
import { Component, useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = (props)=> {

const [comments,setComments]=useState({
  comments: [],
  isLoading: true,
  isError: false,
})


 const getComment = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          props.asin,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg1MTRlMjM2NmU0MzAwMTU1NGZhMjMiLCJpYXQiOjE3MzY3NzQ4ODIsImV4cCI6MTczNzk4NDQ4Mn0.zo0OQvneUWvOVA3f1yeOrjJA7lamQbQ7W-2pjcNEQsc',
          },
        }
      )
      //console.log(response)
      if (response.ok) {
        let comments = await response.json()
        setComments({
          comments: comments, isLoading: false, isError: false
        })
      } else {
        setComments({
          ...comments,  isLoading: false, isError: true
        })
      }
    } catch (error) {
      console.log(error)
      setComments({
        ...comments,  isLoading: false, isError: true
      })
    }
  }

useEffect(()=>{
  getComment()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [props.asin])


    return (
      <div className="text-center">
        {comments.isLoading && <Loading />}
        {comments.isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments.comments}/>
      </div>
    )
  }

export default CommentArea
