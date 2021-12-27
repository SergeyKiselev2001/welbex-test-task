

import { useContext, useEffect, useState } from 'react';
import AppContext from '../../Context/Context';
import classes from './Pagination.module.css';

const Pagination = props => {

    const {currentPage, setCurrentPage} = useContext(AppContext);

    let buttons = [];

    for (let i = 0; i < props.amount; i++){
        if (i == currentPage){
            buttons.push(<button className={classes.button + ' ' + classes.button_active}>{i+1}</button>)
        } else {
            buttons.push(<button onClick={()=>changePage(i)} className={classes.button}>{i+1}</button>)
        }
    }

    const changePage = page => {
        setCurrentPage(page);
    }

    return (
        <div className={classes.pagintion}>
            {buttons}
        </div>
    )
}


export default Pagination;