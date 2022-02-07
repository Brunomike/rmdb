import React from "react"
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../config";
import HeroImage from "../components/HeroImage";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import Thumbnail from "../components/Thumbnails";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import {useHomeFetch} from "../hooks/useHomeFetch";
import NoImage from '../images/no_image.jpg'

const Home = () => {
    const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch()
    //console.log(state)

    if (error) return <div>Something went wrong ...</div>
    return (
        <>
            {!searchTerm && state.results[0] ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title} description={state.results[0].overview}/>
                : null}
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumbnail
                        key={movie.id}
                        clickable image={
                        movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                    }
                        movieId={movie.id}
                    />
                ))}
            </Grid>

            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
            )}
        </>
    )
}

export default Home
