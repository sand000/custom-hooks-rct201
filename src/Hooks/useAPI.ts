import React, { useEffect, useState } from 'react'

const useAPI = (apiFn: Function) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<boolean>();
    
    const exec = async () =>{
        setLoading(true);
        try{
           let data = await apiFn();
           setData(data);
        }catch(e){
            setError(true);
        }finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        exec();
    },[])

    return {loading, error, data}
}

export default useAPI
