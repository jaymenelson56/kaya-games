export const ReviewMenuBar = ({ review, handleInputChange, userMode, editMode, handleDelete, handleSave, setEditMode, reactions }) => {
    return (
        <div className="view-form">
            <header>
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

                {userMode === true ? (<> {editMode === true ? (<><button onClick={handleSave}>Update</button></>
                ) : (
                    <> <button onClick={() => setEditMode(true)}>Edit</button></>
                )}
                    <button onClick={handleDelete}

                    >Delete</button></>
                ) : (<></>)}
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
                    {<img src={review.reaction?.image} alt={review.reaction?.alt}className="photo" />}
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
        </div>
    )
}