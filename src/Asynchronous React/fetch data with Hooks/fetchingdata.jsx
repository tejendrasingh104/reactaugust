import { useState, useEffect } from "react";

export default function FetchingData() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(
            'https://api.github.com/users/tejendrasingh104'
        ).then(response => response.json())
        .then(data => setData(data));
    }, []);
    if(data)
    return(
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}