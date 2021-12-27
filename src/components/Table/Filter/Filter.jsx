

import { useEffect, useState } from 'react';
import classes from './Filter.module.css';

const Filter = props => {

    const [columnName, setColumnName] = useState('name');
    const [condition, setCondition] = useState('name');



    const filter = (event) => {
        event.preventDefault();

        console.log(columnName,' + ' ,condition)
    }

    const nameChanging = event => {
        setColumnName(event.target.value);
    }

    const conditionChanging = event => {
        setCondition(event.target.value);
    }

    return (
        <div className={classes.filter}>
            <form onSubmit={(e)=>filter(e)} action="">
                <select onChange={(e)=>nameChanging(e)} value={columnName}>
                    <option>Столбец</option>
                    <option name='name' >Название</option>
                    <option name='amount'>Количество</option>
                    <option name='distance'>Расстояние</option>
                </select>
                <select onChange={(e)=>conditionChanging(e)} value={condition}>
                    <option>Условие</option>
                    <option name='equal'>Равно</option>
                    <option name='contain'>Содержит</option>
                    <option name='larger'>Больше</option>
                    <option name='smaller'>Меньше</option>
                </select>
                <input type="text" placeholder='text' />
                <button>Сброс</button>
                <button type='submit'>Фильтр</button>
            </form>
        </div>
    )
}

export default Filter;