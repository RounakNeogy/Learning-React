import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FaStar } from 'react-icons/fa';
//import App from './App';


const createArray = (length) => [
  ...Array(length)
]

function Star({ selected = false, onSelect }) {
  return <FaStar
    color={(selected) ? "red" : "grey"}
    onClick={onSelect}
  />
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>{selectedStars} out of {totalStars} stars.</p>
    </>
  )
}

function App() {
  return (
    <>
      <StarRating totalStars={10} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

