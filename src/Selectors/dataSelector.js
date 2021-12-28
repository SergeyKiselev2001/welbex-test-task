

export const dataSelector = (filter, data) => {
    let result = data;
    const { name, condition, value } = filter;
  
    if (!value) {
        return result;
    }
  
    switch (condition) {
      case "Равно":
        if (name === "Название") {
          result = data.filter((el) => el.name === value);
        }
        if (name === "Количество") {
          result = data.filter((el) => el.amount === value);
        }
        if (name === "Расстояние") {
          result = data.filter((el) => el.distance === value);
        }
        break;
  
      case "Содержит":
        if (name === "Название") {
          result = data.filter((el) => el.name.includes(value));
        }
        if (name === "Количество") {
          result = data.filter((el) => el.amount.includes(value));
        }
        if (name === "Расстояние") {
          result = data.filter((el) => el.distance.includes(value));
        }
        break;
  
      case "Больше":
        if (name === "Название") {
          result = data.filter(
            (el) => Number(el.name.replace(",", ".")) > Number(value)
          );
        }
        if (name === "Количество") {
          result = data.filter(
            (el) => Number(el.amount.replace(",", ".")) > Number(value)
          );
        }
        if (name === "Расстояние") {
          result = data.filter(
            (el) => Number(el.distance.replace(",", ".")) > Number(value)
          );
        }
        break;
      case "Меньше":
        if (name === "Название") {
          result = data.filter(
            (el) => Number(el.name.replace(",", ".")) < Number(value)
          );
        }
        if (name === "Количество") {
          result = data.filter(
            (el) => Number(el.amount.replace(",", ".")) < Number(value)
          );
        }
        if (name === "Расстояние") {
          result = data.filter(
            (el) => Number(el.distance.replace(",", ".")) < Number(value)
          );
        }
        break;
      default:
        break;
    }
    return result;
  };