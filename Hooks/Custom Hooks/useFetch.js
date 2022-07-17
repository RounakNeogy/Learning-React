/*
The can be three stages loading, success, error
*/

import { useState, useEffect } from "react";

export function useFetch(uri){

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        if(!uri) return;
        fetch(uri)
        .then((data) => data.json)
        .then((data) => setData(data))
        .then(() => setLoading(false))
        .catch((error) => setError(error) )
    },[uri])

    return {loading,data,error};
}
