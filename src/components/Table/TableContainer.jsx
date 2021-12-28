import { useContext } from "react";
import { FilterContext, PagesAmount } from "../../Context/Context";
import { dataAccessLayer } from "../../DAL/DAL";
import {dataSelector} from "../../Selectors/dataSelector";
import Table from "./Table";

const TableContainer = (props) => {
  let data = dataAccessLayer.getData();

  const { filter, setFilter } = useContext(FilterContext);

  data = dataSelector(filter, data);

  const ROWS_PER_PAGE = 10;
  const rowsAmount = data.length;

  const currentPagesAmount = Math.ceil(rowsAmount / ROWS_PER_PAGE);
  const { pagesAmount, setPagesAmount } = useContext(PagesAmount);
  setPagesAmount(currentPagesAmount);

  return (
    <div>
      <Table data={data} />
    </div>
  );
};



export default TableContainer;
