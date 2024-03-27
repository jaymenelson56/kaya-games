import { Link } from "react-router-dom"

export const ReviewMenuBar = ({ review, handleInputChange, userMode, editMode, handleDelete, handleSave, setEditMode, reactions, navigate, numberOfVotes }) => {
    return (
        <div className="view-form">
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
                    <span className="view-form-static">{review.title}</span>
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
                </>) : (<>{<img src={review.reaction?.image} alt={review.reaction?.alt} className="photo" />}</>)}
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
           
           <div> <button className="button-quadro">{numberOfVotes} users like this review</button></div>
            </div>
           
            <button className="button-quadro" onClick={() => navigate("/reviews")}>Return</button>
        </div>
    )
}