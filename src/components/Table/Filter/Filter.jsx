import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../Context/Context";
import classes from "./Filter.module.css";

const Filter = (props) => {
  const [columnName, setColumnName] = useState('Название');
  const [condition, setCondition] = useState('Равно');
  const [inputText, setinputText] = useState('');

  const {filter, setFilter} = useContext(FilterContext);

  const filtering = (event) => {
    event.preventDefault();

    debugger;

    setFilter({
        name: columnName,
        condition: condition,
        value: inputText
    });
  };

  const resseting = event => {
    event.preventDefault();
    setFilter({
        name: '',
        condition: '',
        value: ''
    });

    setColumnName('Название');
    setCondition('Равно');
    setinputText('');
  }

  const nameChanging = (event) => {
    setColumnName(event.target.value);
  };

  const conditionChanging = (event) => {
    setCondition(event.target.value);
  };

  const textChanging = (event) => {
    setinputText(event.target.value);
  };

  return (
    <div className={classes.filter}>
      <form  action="">
        <div className={classes.column}>
          <select onChange={(e) => nameChanging(e)} value={columnName}>
            <option>Название</option>
            <option>Количество</option>
            <option>Расстояние</option>
          </select>
        </div>

        <div className={classes.column}>
          <select onChange={(e) => conditionChanging(e)} value={condition}>
            <option>Равно</option>
            <option>Содержит</option>
            <option>Больше</option>
            <option>Меньше</option>
          </select>
        </div>

        <div className={classes.column}>
          <input
            onChange={(e) => textChanging(e)}
            type="text"
            placeholder="text"
            value={inputText}
          />
        </div>

        <button onClick={(e) => resseting(e)} className={classes.submit}>Сброс</button>
        <button onClick={(e) => filtering(e)} className={classes.submit} type="submit">Фильтр</button>
      </form>
    </div>
  );
};

export default Filter;
