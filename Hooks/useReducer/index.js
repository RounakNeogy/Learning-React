import React, {useState,useEffect,useReducer} from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';

const initialState = {
  message: "Hi"
}

function reducer(state,action){
  switch(action.type){
    case "yell": {
      return {
        message: `HEY!! I SAID ${state.message}`
      }
      break;
    }
    case "whisper": {
      return {
        message: `excuse me! i said ${state.message}`
      }
      break;
    }
  }
}

function App() {

  const [state,dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type:"yell"})}>
        Yell
      </button>
      <button onClick={() => dispatch({type:"whisper"})}>
        whisper
      </button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

