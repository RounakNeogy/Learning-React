import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';

function useInput(initialValue){                      
  const [state,setState] = useState(initialValue);
  return [
    {
      state,
      onChange: (e) => setState(e.target.value)
    },
    () => setState(initialValue)
  ] 
}



function App() {

  const [soundProps,resetSound] = useInput("");           //Custom Hook
  const [colorProps,resetColor] = useInput("#000000");
 
  const submit = (e) => {
    e.preventDefault();
    alert(`${soundProps.state} sounds like ${colorProps.state}!!`)
    resetSound();
    resetColor();
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          {...soundProps}
          type="text"
          placeholder="Sounds..."
        />
        <input
          {...colorProps}
          type="color"
        />
        <button>Add</button>
      </form>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

