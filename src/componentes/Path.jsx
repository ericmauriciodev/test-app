import Button from "./boton"
import { useState } from 'react';

function Path() {
 const [valor, setValor] = useState("")// [valor, function de cambio]
 const test = valor.split("")
 console.log(test.pop())
 console.log('====================================');
 console.log(test);
 console.log('====================================');
  return (
    <div className="">
      <div>{valor}</div>
       <div>
       <Button nombre={"1"} cambiarValor={() => {setValor(valor + "1")}} ></Button>
       <Button nombre={"2"} cambiarValor={() => {setValor(valor + "2")}} ></Button>
       <Button nombre={"3"} cambiarValor={() => {setValor(valor + "3")}} ></Button>
       </div>
       <div>
       <Button nombre={"4"} cambiarValor={() => {setValor(valor + "4")}} ></Button>
       <Button nombre={"5"} cambiarValor={() => {setValor(valor + "5")}} ></Button>
       <Button nombre={"6"} cambiarValor={() => {setValor(valor + "6")}} ></Button>
       </div>
       <div>
       <Button nombre={"7"} cambiarValor={() => {setValor(valor + "7")}} ></Button>
       <Button nombre={"8"} cambiarValor={() => {setValor(valor + "8")}} ></Button>
       <Button nombre={"9"} cambiarValor={() => {setValor(valor + "9")}} ></Button>
       </div>
       <div>
        <Button nombre={"0"} cambiarValor={() => {setValor(valor + "0")}} ></Button>
       </div>
       <div>
        <Button nombre={"Delete"} cambiarValor={() => {
          const newArr = valor.split("")
          newArr.pop()
          setValor(newArr.join(""))
        }} ></Button>
        <Button nombre={"Reset"} cambiarValor={() => {setValor("")}} ></Button>
       </div>
    </div>
  );
}

export default Path;
