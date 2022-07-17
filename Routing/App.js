import './App.css';
import { useState, useEffect } from "react";
import { Link,Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  )
}

export function History(){
  return(
    <div>
      <h1>Our History</h1>
    </div>
  )
}

export function About() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>About Section</h1>
      <Outlet/>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>My Contacts</h1>
    </div>
  )

}


export function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

