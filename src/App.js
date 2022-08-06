import React from 'react'
import Header from './components/Header'
import Home from "./containers/Home"
import Movie from "./components/Movie";
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router";
import {GlobalStyle} from './GlobalStyle'
import UserProvider from "./context";
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <Router>
            <UserProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/:movieId" element={<Movie/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
                <GlobalStyle/>
            </UserProvider>
        </Router>
    )
}

export default App
