export const ReviewMenuBar = ({ review, handleInputChange, userMode, editMode, handleDelete, handleSave, setEditMode }) => {
    return (
        <div>
            <header>
                {editMode === true ? (<>
                    <input
                        type="text"
                        name="title"
                        value={review.title}
                        onChange={handleInputChange}
                        required

                    />
                </>
                ) : (
                    <span>{review.title}</span>
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
                <span>{review.user?.name}:</span>
                {editMode === true ? (<>
                    <textarea
                        value={review.body}
                        rows={5}
                        cols={30}
                        name="body"
                        onChange={handleInputChange}
                        required

                    />
                </>) : (<> {review.body}</>)}

            </div>
        </div>
    )
}