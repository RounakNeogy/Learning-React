/*
The can be three stages loading, success, error
*/

import { useState, useEffect } from "react";

export function useFetch(userId){

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        if(!userId) return;
        fetch(`https://api.github.com/users/${userId}`)
        .then((data) => data.json())
        .then((data) => setData(data))
        .then(() => setLoading(false))
        .catch((error) => setError(error) )
    },[userId])

    return {loading,data,error};
}
