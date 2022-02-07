import React from 'react'
import Header from './components/Header'
import Home from "./containers/Home"
import Movie from "./components/Movie";

//Routing
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router";

// styles
import {GlobalStyle} from './GlobalStyle'
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:movieId" element={<Movie/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
                <GlobalStyle/>
        </Router>
    )
}

export default App
