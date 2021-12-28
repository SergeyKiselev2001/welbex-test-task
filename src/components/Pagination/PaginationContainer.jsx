import { useContext } from "react";
import { PagesAmount } from "../../Context/Context";
import { dataAccessLayer } from "../../DAL/DAL";
import Pagination from "./Pagination";




const PaginationContainer = props => {

    const {pagesAmount, setPagesAmount} = useContext(PagesAmount);

    return (
        <div>
            <Pagination amount={pagesAmount} />
        </div>
       
    )
}


export default PaginationContainer;