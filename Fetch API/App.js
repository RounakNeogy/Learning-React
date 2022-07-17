import './App.css';
import { useState } from 'react';
import { useFetch } from './useFetch';



export function App() {

  const [userid,setUserId] = useState(null)
  const {loading,data,error} = useFetch(userid)

  if(userid==null){
    return(
      <>
        <input
        type="text"
        placeholder="Enter Github Username"
        id="ID"
        />
        <button onClick={() => setUserId(document.getElementById("ID").value)}>show</button>
      </>
    )
  }

  if(loading) return <h1>Loading...</h1>
  if(error) return(
    <h1>No data to show!!</h1>
  )
  return (
    <>
      <input
        type="text"
        placeholder="Enter Github Username"
        id="ID"
      />
      <button onClick={() => setUserId(document.getElementById("ID").value)}>show</button>
      <h1>{data.login}</h1>
      <img
        src = {data.avatar_url}
        alt = {data.login}
        height = {400}
      />
      {data.name && <p>{data.name}</p>}
      {data.bio && <p>{data.bio}</p>} 
      {data.location && <p>{data.location}</p>}  
    </>
  );
}

export default App;
