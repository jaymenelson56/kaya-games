
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteReview, getActualReview, updateReview } from "../services/ReviewService"
import { ReviewMenuBar } from "./ReviewMenuBar"

//A block taking up most of the page

export const ViewReview = ({ currentUser }) => {
  const [review, setReview] = useState({ title: "", body: "" });
  const [userMode, setUserMode] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const { reviewId } = useParams()
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

  const handleDelete = () => {
    deleteReview(review.id).then(() => {
      setReview({})
      navigate("/reviews")
    })

  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReview(prevReview => ({
      ...prevReview,
      [name]: value
    }));

  }

  const handleSave = (event) => {
    event.preventDefault()

    const editedReview = {
      id: review.id,
      userId: review.userId,
      title: review.title,
      body: review.body,
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
      />


    </section>
  )


}


//A dropdown will appear to allow you to select a reaction

//If one is selected that photo will display at the bottom of the page.

//If user id and review's userId match then a delete button will appear on the upper right hand side of the screen.

//Also if they match an edit button will appear, and pressing it will take them to an edit page.