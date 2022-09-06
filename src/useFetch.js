import { useState } from "react";
import { useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
          .then( res => {
            if (!res.ok) {
              throw Error('could not fetch the data for that resource');          }
            return res.json()
          }).then(data => {
            setData(data);
            setIsPending(false);
            setIsError(null)
          }).catch(err =>{
            setIsPending(false);
            setIsError(err.message);
          })
        }, 1000);
      }, [url]);

      return {data, isPending, isError};
}

export default useFetch;