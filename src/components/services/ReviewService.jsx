export const getReviews = () => {
    return fetch("http://localhost:9001/reviews?_embed=user").then((res) => res.json())
}

export const getReactions = () => {
  return fetch("http://localhost:9001/reactions").then((res) => res.json())
}

export const getUserByEmail =(email) => {
    return fetch (`http://localhost:9001/users?email=${email}`).then((res) => res.json())
}

export const createUser = (customer) => {
    return fetch("http://localhost:9001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then((res) => res.json())
  }

  export const getActualReview = (reviewId) => {
    return fetch (`http://localhost:9001/reviews?id=${reviewId}&_embed=user&_embed=reaction`).then((res) => res.json())
  }

  export const createNewReview = (review) => {
    return fetch (`http://localhost:9001/reviews`, {
      method: "POST", 
      headers: { 
        "Content-Type": "application/json"

      },
      body:JSON.stringify(review)
    })
  }

  export const updateReview = (review) => {
    return fetch(`http://localhost:9001/reviews/${review.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review)
    })
}

export const deleteReview = (review) => {
  return fetch(`http://localhost:9001/reviews/${review}`, {
      method: "delete",
  })
}

export const getComments = () => {
  return fetch ("http://localhost:9001/comments?_embed=user").then((res) => res.json())
}
export const createNewComment = (comment) => {
  return fetch (`http://localhost:9001/comments`, {
    method: "POST", 
    headers: { 
      "Content-Type": "application/json"

    },
    body:JSON.stringify(comment)
  })
}