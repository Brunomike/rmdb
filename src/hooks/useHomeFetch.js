import React, {useEffect, useState, useRef} from "react";
import {isPersistedState} from "../helpers";
import API from "../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState)
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    //console.log(searchTerm)

    const fetchMovies = async (searchTerm = '', page) => {
        try {
            setError(false)
            setLoading(true)

            const movies = await API.fetchMovies(searchTerm, page)
            //console.log(movies)

            setState(prevState => ({
                ...movies,
                results:
                    page > 1 ? [...prevState.results, ...movies.results] : [...movies.results]
            }))
        } catch (err) {
            setError(true)
        }
        setLoading(false)
    }

    //Initial and search
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState("homeState")
            if (sessionState.results.length > 0) {
                // console.log("Grabbing from sessionStorage")
                // console.log(sessionState)
                setState(sessionState)
                return
            } else {
                //console.log("Fetching Popular Movies")
                fetchMovies(searchTerm, 1)
            }
        }
        //console.log("Grabbing from api")
        setState(initialState)
        fetchMovies(searchTerm, 1)
    }, [searchTerm])

    //Load More
    useEffect(() => {
        if (!isLoadingMore) return
        fetchMovies(searchTerm, state.page + 1)
        setIsLoadingMore(false)
    }, [isLoadingMore, searchTerm, state.page])


    //Write to sessionStorage
    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state))
    }, [searchTerm, state])


    return {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore}
}