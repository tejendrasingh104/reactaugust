import { useState, useEffect } from "react";

function GithubUser({name, public_repos, avatar, following}){
    return(
        <div>
            <h1>{name}</h1>
            <p>public repos: {public_repos}</p>
            <p>following: {following}</p>
            <img src={avatar} alt={name}  height={190}/>
        </div>
    )
}
export default function FetchingData() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(
            'https://api.github.com/users/tejendrasingh104'
        ).then(response => response.json())
        .then(data => setData(data))
        .then(() => setLoading(false))
        .catch(setError);
    }, []);
    if(loading) return <h1>Loading....</h1>;
    if(error) return <pre>{JSON.stringify(error)}</pre>;
    if(!data) return null;
    return(
        <GithubUser
            name={data.name}
            public_repos = {data.public_repos}
            following = {data.following}
            avatar={data.avatar_url}
        />
    )
}