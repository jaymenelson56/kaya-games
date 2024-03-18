import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createNewReview } from "../services/ReviewService"

export const CreateReview = ({ currentUser }) => {
    const [newpost, setNewpost] = useState({ title: "", body: "" })

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()
        if (newpost.body) {
            const newReview = {
                userId: currentUser.id,
                title: newpost.title,
                body: newpost.body,
            }
            createNewReview(newReview).then(() => {
                navigate("/reviews")
            })
        } else {
            window.alert("Please fill out review")
        }
    }


    return (
        <form>
            <fieldset>
                <div>
                    <label>Title:</label>
                    <input type="text"
                        placeholder="Enter Title" 
                        onChange={(event) => {
                            const newPostCopy = {...newpost}
                            newPostCopy.title = event.target.value
                            setNewpost(newPostCopy)
                        }}
                        />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Review:</label>
                    <textarea
                        placeholder="Enter Review"
                        rows={5}
                        cols={30} 
                        onChange={(event) => {
                            const newPostCopy = {...newpost}
                            newPostCopy.body = event.target.value
                            setNewpost(newPostCopy)
                        }}
                        />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <button onClick={handleSave}>Submit</button>
                </div>
            </fieldset>
        </form>
    )
}




