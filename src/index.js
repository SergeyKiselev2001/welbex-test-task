import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppContext, FilterContext, PagesAmount, RowsContext} from './Context/Context';
import { dataAccessLayer } from './DAL/DAL';


// const http = require("http");

// const host = 'localhost';
// const port = 8000;

// const requestListener = function (req, res) {};

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });


const Main = () => {

 

  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState({
    name: 'X',
    condition: 'X',
    value: 'X'
  });

  const [pagesAmount, setPagesAmount] = useState(0);

  return (
    <React.StrictMode>
      <AppContext.Provider value={{currentPage, setCurrentPage}} >
        <FilterContext.Provider value={{filter, setFilter}}>
        <PagesAmount.Provider value={{pagesAmount, setPagesAmount}}>
          <App />
        </PagesAmount.Provider>
        </FilterContext.Provider>
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
