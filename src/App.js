
import './App.css';
import { useState } from 'react';

import Path from './componentes/Path';
import Button from './componentes/boton';

function App() {
  const [names, setName] = useState() // setName === names = @
  const [lastNames, setLastName] = useState()

  const [result, setResult] = useState("e")

  console.log(names, lastNames, result)
  return (
    <div className="">
      <div>{result}</div>
      <div>
      <input onChange={e => setName(e.target.value)} type="text" name='name' placeholder='nombre'></input>
      </div>
      <input onChange={e => setLastName(e.target.value)} type="text" name='lastName' placeholder='apellido'></input>
      <div>
      <Button nombre={"enviar"} onCLick={() => setResult(`${names} ${lastNames}`)} type="submit" />
      

      </div>
    </div>
  );
}

export default App;
