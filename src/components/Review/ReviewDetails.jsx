
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteReview, getActualReview, getReactions, getVotes, updateReview } from "../services/ReviewService"
import { ReviewMenuBar } from "./ReviewMenuBar"
import "./Review.css"

//A block taking up most of the page

export const ViewReview = ({ currentUser }) => {
  const [review, setReview] = useState({ title: "", body: "", reactionId: 0, });
  const [userMode, setUserMode] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [reactions, setReactions] = useState([])
  const { reviewId } = useParams()
  const [votes, setVotes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getActualReview(reviewId).then((data) => {
      const reviewObj = data[0]
      setReview(reviewObj)
    })
  }, [reviewId])

  useEffect(() => {
    if (currentUser?.id === review?.userId) {
      setUserMode(true)
    } else {
      setUserMode(false)
    }
  }, [currentUser, review])

  useEffect(() => {
    getReactions().then((reactionsArray) =>
      setReactions(reactionsArray))
  }, [])

  useEffect(() => {
    getVotes().then((votesArray) => {
      const filteredVotes = votesArray.filter(vote => vote.reviewId === reviewId)
      setVotes(filteredVotes)})
  
    
  }, [])

const handleDelete = () => {
  deleteReview(review.id).then(() => {
    setReview({})
    navigate("/reviews")
  })

}

const handleInputChange = (event) => {
  const { name, value } = event.target;
  if (name === "reactionId") {
    const selectedReaction = reactions.find(reaction => reaction.id === parseInt(value));
    setReview(prevReview => ({
      ...prevReview,
      reaction: selectedReaction,
      [name]: value
    }));
  } else {
    setReview(prevReview => ({
      ...prevReview,
      [name]: value
    }));
  }


}



const handleSave = (event) => {
  event.preventDefault()

  const editedReview = {
    id: review.id,
    userId: review.userId,
    title: review.title,
    body: review.body,
    reactionId: review.reactionId
  }
  updateReview(editedReview).then(() => {
    navigate(`/reviews/${review.id}`)
    setEditMode(false)
  })

}


return (
  <section>
    <ReviewMenuBar
      review={review}
      userMode={userMode}
      editMode={editMode}
      handleInputChange={handleInputChange}
      handleDelete={handleDelete}
      handleSave={handleSave}
      setEditMode={setEditMode}
      reactions={reactions}
      navigate={navigate}
      votes={votes}
      numberOfVotes={votes.length} 
    />


  </section>
)


}

