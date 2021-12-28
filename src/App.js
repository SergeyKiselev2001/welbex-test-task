
import { useContext } from 'react';
import './App.css';

import PaginationContainer from './components/Pagination/PaginationContainer';
import TableContainer from './components/Table/TableContainer';
import AppContext from './Context/Context';

const App = (props) => {

  return (
    <div className="App">

     <TableContainer/>
     <PaginationContainer />
    </div>
  );
}

export default App;
