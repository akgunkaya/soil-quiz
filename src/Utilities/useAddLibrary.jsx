import { useEffect, useState } from "react";


function useAddLibrary(url, objectToFind) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (window[objectToFind]) {
            return setLoaded(true)
        } else {
            let myScript = document.createElement('script');
            myScript.setAttribute('src', url)

            document.body.appendChild(myScript)
            myScript.addEventListener('load', scriptLoaded, false)

            return () => {
                myScript.removeEventListener('load', scriptLoaded)
            }
        }
    }, [url, objectToFind]);

    function scriptLoaded() {
        setLoaded(true)
    };


    return [loaded]
}

export default useAddLibrary;
