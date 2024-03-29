import React, {useContext} from "react";
import PropTypes from "prop-types";
import Thumbnail from "../Thumbnails";
import Rate from "../Rate";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
import NoImage from '../../images/no_image.jpg'
import {Wrapper, Content, Text} from "./MovieInfo.styles";
import {Context} from "../../context";
import API from "../../API";

const MovieInfo = (props) => {
    const [user] = useContext(Context)

    const handleRating = async value => {
        const rate = await API.rateMovie(user.sessionId, props.movie.id, value)
        console.log(rate)

    }

    return (
        <Wrapper backdrop={props.movie.backdrop_path}>
            <Content>
                <Thumbnail
                    image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                        : NoImage
                    }
                    clickable={false}
                    alt="movie-thumbnail"
                />
                <Text>
                    <h1>{props.movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{props.movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{props.movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{props.movie.directors.length > 1 ? 'S' : ''}</h3>
                            {props.movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}

                        </div>
                    </div>
                    {user && (
                        <div>
                            <p>Rate Movie</p>
                            <Rate callback={handleRating}/>
                        </div>
                    )
                    }
                </Text>
            </Content>
        </Wrapper>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object
}


export default MovieInfo