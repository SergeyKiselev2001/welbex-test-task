import { dataAccessLayer } from "../../DAL/DAL";
import Table from "./Table";



const TableContainer = props => {

    const data = dataAccessLayer.getData();


    return (
       <div>
           <Table  data={data}/>
       </div>
    )
}


export default TableContainer;