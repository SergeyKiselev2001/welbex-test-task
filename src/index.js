import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContext from './Context/Context';


const Main = () => {

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <React.StrictMode>
      <AppContext.Provider value={{currentPage, setCurrentPage}} >
        <App />
      </AppContext.Provider>
  </React.StrictMode>
  )
}

ReactDOM.render(
  <Main /> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
