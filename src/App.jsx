//import Routes and wrap it in tags.

import {  Route, Routes } from "react-router-dom"

import { Authorized } from "./components/View/Authorization"
import { AppViews } from "./components/View/AppViews"
import { Register } from "./components/Auth/Register"
import { Login } from "./components/Auth/Login"

//Within those tags create a path to Login, Register

//Lock The rest of the views behind Authorization and close Routes
export const App = () => {
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route path="*" element={
        <Authorized>
            <AppViews />
        </Authorized>
    }
    />
</Routes>
  )
}

{/* <Routes>
      
<Route path="/" element={
  <>
    <NavBar />
    <Outlet />
  </>
}
>
  <Route index element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/reviews" element={<ReviewList />} />

</Route>
</Routes> */}
