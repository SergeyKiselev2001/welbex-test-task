import { useContext, useState } from "react";
import { FilterContext, PagesAmount, RowsContext } from "../../Context/Context";
import { dataAccessLayer } from "../../DAL/DAL";
import {dataSelector} from "../../Selectors/dataSelector";
import Table from "./Table";

const TableContainer = (props) => {
  
  const { filter, setFilter } = useContext(FilterContext);
  const { pagesAmount, setPagesAmount } = useContext(PagesAmount);
  
  let data = dataAccessLayer.getData();

  data = dataSelector(filter, data);

  const ROWS_PER_PAGE = 10;
  const rowsAmount = data?.length || 1;

  const currentPagesAmount = Math.ceil(rowsAmount / ROWS_PER_PAGE);
  
  setPagesAmount(currentPagesAmount);

  return (
    <div>
      <Table data={data} />
    </div>
  );
};



export default TableContainer;
