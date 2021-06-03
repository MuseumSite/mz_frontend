import {useCallback} from "react"

function useMessage() {
    return useCallback(text => {
        if (text) {
            console.log(text)
        }
    }, [])
}

export default useMessage