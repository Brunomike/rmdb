import React from "react";
import PropTypes from "prop-types";
import {calcTime, convertMoney} from "../../helpers";
//Styles
import {Wrapper, Content} from "./MovieInfoBar.styles";


const MovieInfoBar = (props) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(props.time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(props.budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(props.revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}
export default MovieInfoBar
