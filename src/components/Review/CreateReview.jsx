import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createNewReview, getReactions } from "../services/ReviewService"

export const CreateReview = ({ currentUser }) => {
    const [newpost, setNewpost] = useState({ title: "", body: "" })
    const [reactions, setReactions] = useState([])
    const [selectedReaction, setSelectedReaction] = useState("")
    const [selectedImage, setSelectedImage] = useState("")
    

    const navigate = useNavigate()

    useEffect(() => {
        getReactions().then((reactionsArray) =>
            setReactions(reactionsArray))
    }, [])

    useEffect(() => {
        const selectedReactionObject = reactions.find((reaction) => reaction.id === selectedReaction);
        if (selectedReactionObject) {
            setSelectedImage(selectedReactionObject.image);
        }
    }, [selectedReaction, reactions])

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

    const handleReactChange = (event) => {
        setSelectedReaction(event.target.value);
    }
    return (
        <form>
            <fieldset>
                <div>
                    <label>Title:</label>
                    <input type="text"
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
                    <label>Reaction</label>
                    <select value={selectedReaction} onChange={handleReactChange}>
                        <option value="">Select Reaction...</option>
                        {reactions.map((reaction) => (
                            <option key={reaction.id} value={reaction.id}>
                                {reaction.description}
                            </option>
                        ))}
                    </select>
                    {selectedImage && <img src={selectedImage} alt="Selected Reaction" />}
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Review:</label>
                    <textarea
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
            </fieldset>
        </form>
    )
}




