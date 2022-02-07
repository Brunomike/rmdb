import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Image} from "./Thumbnails.styles";

const Thumbnail = (props) => (
    <div>
        {props.clickable
            ? <Link to={`/${props.movieId}`}>
                <Image src={props.image} alt={'movie-thumb'}/>
            </Link>
            : (<Image src={props.image} alt={'movie-thumb'}/>)}

    </div>
)

Thumbnail.propTypes = {
    movieId: PropTypes.number,
    image: PropTypes.string,
    clickable: PropTypes.bool
}

export default Thumbnail