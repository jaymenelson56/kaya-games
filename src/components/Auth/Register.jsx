import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserByEmail } from "../services/ReviewService"

export const Register = (props) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        bio: ""
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        createUser(user).then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
                localStorage.setItem(
                    "honey_user",
                    JSON.stringify({
                        id: createdUser.id,
                        name: createdUser.name
                    })
                )

                navigate("/")
            }
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        getUserByEmail(user.email).then((response) => {
            if (response.length > 0) {
                // Duplicate email. No good.
                window.alert("Account with that email address already exists")
            } else {
                // Good email, create user.
                registerNewUser()
            }
        })
    }

    const updateUser = (evt) => {
        const copy = { ...user }
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form-login" onSubmit={handleRegister}>
                <h1>Kaya's Game Reviews</h1>
                <h2>Please Register</h2>
                <fieldset>
                    <div className="form-group">
                        <input
                            onChange={updateUser}
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                            autoFocus
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <input
                            onChange={updateUser}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                        />
                    </div>

                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <input
                            onChange={updateUser}
                            type="bio"
                            id="bio"
                            className="form-control"
                            placeholder="Enter Bio"
                            required
                        />
                    </div>
                    
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <button className="login-btn btn-info" type="submit">
                            Register
                        </button>
                    </div>
                </fieldset>
            </form>
        </main>
    )
}
