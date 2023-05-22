import React from "react";

export function useKeyUp(key, callbackFunction) {
    React.useEffect(()=>{
        const handleKeyUp = (event) => {
            if (event.key === key) callbackFunction()
        } 

        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [key, callbackFunction])
}