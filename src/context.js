import React, {useState} from "react";

export const Context = React.createContext();

const UserProvider = (props) => {
    const [state, setState] = useState(undefined)

    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    )
}

export default UserProvider