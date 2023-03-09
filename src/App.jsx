import { useState } from "react";
import { Card } from "./components/Card/Card";
import { Form } from "./components/Form/Form";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const validateMinLength = (value, minLength) => {
    return value.length < minLength ? false : true;
  };
  const validateStartEmpty = (value) => {
    const regex = /^\s+/; // expresión regular que busca espacios al inicio
    return regex.test(value) ? false : true;
  };

  const handlerSubmit = (e, data) => {
    e.preventDefault();
    if (
      validateStartEmpty(data.name) &&
      validateMinLength(data.name, 3) &&
      validateMinLength(data.color, 6)
    ) {
      setData(data);
      setError(false);
    } else {
      setError(true);
      setData({});
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <Form handlerSubmit={handlerSubmit} />
      {error && (
        <p className="error">
          Por favor chequea que la información sea correcta
        </p>
      )}
      {data.name && data.color && <Card data={data} />}
    </div>
  );
}

export default App;
