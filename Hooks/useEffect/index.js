import React, { useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';

function App() {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(setData)
    },[])

  if(data){
    return (
      <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li> 
        ))}

      </ul>
      <button onClick={() => setData([])}>Remove Data</button>
      </>
    )
  }

  return (
    <>
      <h1>No Data!!</h1>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

