import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import AddComment from "./AddComment";


const CommentArea = ()=>{
    const param = useParams();
    const [comment, setComment] = useState([])

    const Strive = async () => {
        const URL = "https://striveschool-api.herokuapp.com/api/comments/";
        const Token = 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg3YjRlMTFhNjgzYjAwMTU5MjE3ODMiLCJpYXQiOjE3MzY5NDY5MTMsImV4cCI6MTczODE1NjUxM30.PXc78SEr8K8bcRf0M4jD2sIW_KSuOCvRZMaTYj7pS6M'
        try {
          const response = await fetch(URL + param.id, {
            method: "GET",
            headers: {
              "Authorization": Token,
              "Content-Type": "application/json"
          }});
          if (response.ok) {
            const data = await response.json();
            setComment(data);
            console.log(data);
          } else {
            throw new Error("errore nel recupero dei dati");
          }
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        Strive()
        console.log();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(<>
    <div className="text-center">
       { /*{this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}*/}
        <AddComment asin={param.id} />
        <CommentList commentsToShow={comment}/>
      </div>
    </>)
}

export default CommentArea