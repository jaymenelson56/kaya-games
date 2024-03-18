
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getActualReview } from "../services/ReviewService"

//A block taking up most of the page

export const ViewReview = () => {
    const [review, setReview] = useState({})
    const { reviewId } = useParams()

    useEffect(() => {
        getActualReview(reviewId).then((data) => {
            const reviewObj = data[0]
            setReview(reviewObj)
        })
    }, [reviewId])

return (
  <section>
    <header><span>:</span>{review.title}</header>
    <div>
        <span>{review.user?.name}:</span>
        {review.body}
    </div>
  </section>
)

    
}


//A dropdown will appear to allow you to select a reaction

//If one is selected that photo will display at the bottom of the page.

//If user id and review's userId match then a delete button will appear on the upper right hand side of the screen.

//Also if they match an edit button will appear, and pressing it will take them to an edit page.