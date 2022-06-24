import React from "react";

const Button = ({
  nombre,
  cambiarValor
}) => {

  return <button onClick={cambiarValor}>{nombre}</button>
}

export default Button

