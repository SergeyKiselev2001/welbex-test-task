import { dataAccessLayer } from "../../DAL/DAL";
import Pagination from "./Pagination";




const PaginationContainer = props => {

    const ROWS_PER_PAGE = 10;

    const rowsAmount = dataAccessLayer.getData().length;
    
    const pagesAmount = Math.ceil(rowsAmount / ROWS_PER_PAGE);
    

    return (
        <div>
            <Pagination amount={pagesAmount} />
        </div>
       
    )
}


export default PaginationContainer;