import React from "react";
import PropTypes from "prop-types";
import {Wrapper, Content, Text} from "./HeroImage.styles";

const HeroImage = (props) => (
    <Wrapper image={props.image}>
        <Content>
            <Text>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </Text>
        </Content>
    </Wrapper>
)

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default HeroImage

