import React, { useState } from "react";

export const Form = ({ handlerSubmit }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  return (
    <>
      <form onSubmit={(e) => handlerSubmit(e, { name, color })}>
        <input
          type="text"
          placeholder="Escribe tu Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cual es tu color favorito"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
