import './App.css';
import { useContext } from "react";
import {useTrees} from './';

export function App() {

  const {trees} = useTrees();

  return (
    <div>
      <h1>Trees I have heard of...</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}  
      </ul>      
    </div>
  );
}

export default App;
