import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import Greeter from './greeter';
import LikeButton from "./LikeButton";
import reportWebVitals from './reportWebVitals';
import College from "./components/college";
import Student from "./components/student";
import App from "./App";

const Display = () => {
  const Likes= []
  for(var i=0;i<10;i++)
  {
    Likes.push(<LikeButton/>)
  }
    return <>
  
    {Likes}

  </>
  };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><App/></>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
