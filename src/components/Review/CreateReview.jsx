import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createNewReview, getReactions } from "../services/ReviewService"

export const CreateReview = ({ currentUser }) => {
    const [newpost, setNewpost] = useState({ title: "", body: "", reactionId: 0 })
    const [reactions, setReactions] = useState([])
    const [selectedImage, setSelectedImage] = useState("")


    const navigate = useNavigate()

    useEffect(() => {
        getReactions().then((reactionsArray) =>
            setReactions(reactionsArray))
    }, [])

    useEffect(() => {
        const selectedReactionObject = reactions.find((reaction) => reaction.id === parseInt(newpost.reactionId));
        if (selectedReactionObject) {
            setSelectedImage(selectedReactionObject);
        }
    }, [newpost.reactionId, reactions])

    const handleSave = (event) => {
        event.preventDefault()
        if (newpost.body) {
            const newReview = {
                userId: currentUser.id,
                title: newpost.title,
                body: newpost.body,
                reactionId: parseInt(newpost.reactionId)
            }
            createNewReview(newReview).then(() => {
                navigate("/reviews")
            })
        } else {
            window.alert("Please fill out review")
        }
    }

    const handleReactChange = (event) => {
        setNewpost({ ...newpost, reactionId: event.target.value })
    }
    return (

        <form className="view-form">
            <fieldset>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                        id="title"
                        placeholder="Enter Title"
                        name="title"
                        onChange={(event) => {
                            const newPostCopy = { ...newpost }
                            newPostCopy.title = event.target.value
                            setNewpost(newPostCopy)
                        }}
                    />

                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="reaction.description">Reaction</label>
                    <select value={newpost.reactionId} name="reaction.description" id="reaction.description" onChange={handleReactChange}>
                        <option value="">Select Reaction...</option>
                        {reactions.map((reaction) => (
                            <option key={reaction.id} value={reaction.id}>
                                {reaction.description}
                            </option>
                        ))}

                    </select>
                    <div>
                        {selectedImage && <img src={selectedImage.image} alt={selectedImage.alt} className="photo" />}
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="review"><div className="label-tag">Review:</div></label>
                    < textarea
                        id="review"
                        placeholder="Enter Review"
                        rows={5}
                        cols={30}
                        name="review"
                        onChange={(event) => {
                            const newPostCopy = { ...newpost }
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
                <div>
                    <button className="button-quadro" onClick={() => navigate("/reviews")}>Cancel</button>
                </div>
            </fieldset>
        </form>

    )
}




