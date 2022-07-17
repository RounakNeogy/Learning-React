import React, {useRef} from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';

function App() {

  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const newSound = sound.current.value;
    const newColor = color.current.value;
    alert(`${newSound} sounds like ${newColor}!!`)
    sound.current.value="";
    sound.current.value="#000000"
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          ref={sound}
          type="text"
          placeholder="Sounds..."
        />
        <input
          ref={color}
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

