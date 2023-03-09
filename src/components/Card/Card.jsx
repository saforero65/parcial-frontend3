import React from "react";

export const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2> Hola {data.name}</h2>
      <p style={{ backgroundColor: `#${data.color}` }}>
        Sabemos que tu color favorito es {data.color}
      </p>
    </div>
  );
};
