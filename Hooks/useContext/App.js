import './App.css';
import { useContext } from "react";
import {TreesContext} from './';

export function App() {

  const {trees} = useContext(TreesContext);

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
