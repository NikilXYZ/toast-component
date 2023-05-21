import React from "react";

export function useToggle(initialState = false) {
    if (typeof(initialState) !== "boolean") {
        throw new Error(`useToggle requires a boolean value. You provided a ${typeof(initialState)}.`)
    }

    const [state, setState] = React.useState(initialState);

    const toggleState = () => {
        setState((currentState) => !currentState)
    }

    return [state, toggleState]

}