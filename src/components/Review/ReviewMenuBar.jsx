import { Link } from "react-router-dom"

export const ReviewMenuBar = ({ currentUser, review, handleInputChange, userMode, editMode, handleDelete,
    handleSave, setEditMode, reactions, navigate, likes, handleLike, comments, newComment, handleCommentSave, setNewComment }) => {
    return (
        
        <div className="view-form">
            <span><button className="button-cinco" onClick={() => navigate("/reviews")}>Back</button></span>
            <header className="header-title">
                {editMode === true ? (<>
                    <input className="view-form-edit"
                        type="text"
                        name="title"
                        value={review.title}
                        onChange={handleInputChange}
                        required

                    />
                </>
                ) : (
                    <span className="view-form-static">{review?.title}</span>
                )}

            </header>
            <div>
                {editMode === true ? (<>
                    <select value={review.reaction?.id} name="reactionId" onChange={handleInputChange}>
                        <option value="">Select Reaction...</option>
                        {reactions.map((reaction) => (
                            <option key={reaction.id} value={reaction.id} >
                                {reaction.description}
                            </option>
                        ))}

                    </select>
                    <div>
                        {<img src={review.reaction?.image} alt={review.reaction?.alt} className="photo" />}
                    </div>
                </>) : (<>{<img src={review?.reaction?.image} alt={review.reaction?.alt} className="photo" />}</>)}
            </div>
            <div>
                <span className="name">{review.user?.name}:</span>
                {editMode === true ? (<>
                    <textarea
                        className="view-form-edit"
                        value={review.body}
                        rows={5}
                        cols={30}
                        name="body"
                        onChange={handleInputChange}
                        required

                    />
                </>) : (<> <span className="view-form-static">{review.body}</span></>)}

            </div>
            <div className="button-uno">

                {userMode === true ? (<> {editMode === true ? (<><button className="button-dos" onClick={handleSave}>Update</button></>
                ) : (
                    <> <button className="button-dos" onClick={() => setEditMode(true)}>Edit</button></>
                )}
                    <button className="button-tres" onClick={handleDelete}

                    >Delete</button></>
                ) : (<></>)}
            </div>
            <div className="like-section">
                <button onClick={handleLike} disabled={userMode || !review.id || editMode}>
                    Like:<span>{likes} likes</span>
                </button>

            </div>
            <div>
                <h2>Comments</h2>

                {comments.map((comment) => (
                       
                 <span key={comment.id}>{comment?.user?.name} commented : {comment.body} <br/></span>
                

                ))}

            </div>
            <div>
                <h3>Type Comment Here</h3>
                <label htmlFor="comment">{currentUser?.name}: </label>
                <input type="text"
                    id="comment"
                    placeholder="Comment Here"
                    name="comment"
                    onChange={(event) => {
                        const newPostCopy = { ...newComment }
                        newPostCopy.body = event.target.value
                        setNewComment(newPostCopy)
                    }}
                />
                <button onClick={handleCommentSave}>Post</button>
            </div>
        </div>
    )
}