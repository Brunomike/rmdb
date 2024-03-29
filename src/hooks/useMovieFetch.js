import {useCallback, useEffect, useState} from "react";
import {isPersistedState} from "../helpers";
import API from "../API";

export const useMovieFetch = (movieId) => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchMovie = useCallback(async () => {
        try {
            setLoading(true)
            setError(false)

            const movie = await API.fetchMovie(movieId)
            const credits = await API.fetchCredits(movieId)
            //Get directors only
            const directors = credits.crew.filter(
                member => member.job === 'Director'
            )
            setState({
                ...movie,
                actors: credits.cast,
                directors
            })
            setLoading(false)
        } catch (err) {
            setError(true)
        }
        setLoading(false)
    }, [movieId])

    useEffect(() => {
        const sessionState = isPersistedState(movieId)
        if (sessionState) {
            setState(sessionState)
            setLoading(false)
            return
        }
        fetchMovie()
    }, [fetchMovie, movieId])

    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])

    return {state, loading, error}
}