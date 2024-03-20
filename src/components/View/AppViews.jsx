import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../Nav/NavBar"
import { Home } from "../Home/Home"
import { About } from "../About/About"
import { ReviewList } from "../Review/ReviewList"
import { ViewReview } from "../Review/ReviewDetails"
import { CreateReview } from "../Review/CreateReview"

export const AppViews = () => {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)
        setCurrentUser(honeyUserObject)
    }, [])

    return (
        <Routes>

            <Route path="/" element={
                <>
                    <NavBar />
                    <Outlet />
                </>
            }
            >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/reviews">
                    <Route index element={<ReviewList />} />
                    <Route path=":reviewId" element={<ViewReview currentUser={currentUser} />} />
                    <Route path="create" element={<CreateReview currentUser={currentUser} />} />
                </Route>

            </Route>
        </Routes>
    )
}