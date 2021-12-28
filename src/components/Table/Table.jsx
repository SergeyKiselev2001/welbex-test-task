import { useContext } from "react";
import {AppContext} from "../../Context/Context";
import Filter from "./Filter/Filter";
import classes from "./Table.module.css";

const Table = (props) => {

  const {currentPage, setCurrentPage} = useContext(AppContext);

  const ROWS_PER_PAGE = 10;

  const rowsForCurrentPage = props.data.filter((el,index)=>index>=currentPage*ROWS_PER_PAGE && index<currentPage*ROWS_PER_PAGE+ROWS_PER_PAGE);


  const rows = rowsForCurrentPage.map((el, index) => {
    return (
      <tr key={index}>
        <td className={classes.first}>{el.date}</td>
        <td className={classes.second}>{el.name}</td>
        <td className={classes.third}>{el.amount}</td>
        <td className={classes.fourth}>{el.distance}</td>
      </tr>
    );
  });




  return (
    <div className={classes.tableBlock}>
      <Filter />
      <table className={classes.table}>
        <tbody>
          <tr>
          <td>Дата</td>
          <td>Название</td>
          <td>Количество</td>
          <td>Расстояние</td>
        </tr>
        {rows}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
