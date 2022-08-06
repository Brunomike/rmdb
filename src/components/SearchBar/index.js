import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import searchIcon from '../../images/search-icon.svg'
import {Wrapper, Content} from "./SearchBar.styles";


const SearchBar = (props) => {
    const [state, setState] = useState('')
    const initial=useRef(true)


    useEffect(() => {
        if (initial.current){
            initial.current=false
            return
        }
        const timer = setTimeout(() => {
            props.setSearchTerm(state)
        }, 500)

        return () => clearTimeout(timer)
    }, [props, state])


    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={e => setState(e.target.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes={
    callback:PropTypes.func
}
export default SearchBar




