import React from "react";

export function useKeyUp(key, callbackFunction) {
    React.useEffect(()=>{
        const handleKeyUp = (event) => {
            if (event.key === key) callbackFunction()
        } 

        document.addEventListener('keyup', callbackFunction)

        return () => {
            document.removeEventListener('keyup', callbackFunction)
        }
    }, [key, callbackFunction])
}