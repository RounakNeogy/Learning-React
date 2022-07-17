import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const TreesContext = createContext();

const trees = [
  {id:"0", type: "Maple"},
  {id:"1", type: "Oak"}, 
  {id:"2", type: "Family"}, 
  {id:"3", type: "Component"}  
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{trees}}>
    <App />
  </TreesContext.Provider>
);

