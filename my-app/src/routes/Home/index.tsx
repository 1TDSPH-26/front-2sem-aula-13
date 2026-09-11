import { useEffect, useState } from "react";

export default function Home() {
  document.title = "Home";

  const [clicado, setClicado] = useState<number>(0);

  let chamadas: Number = 0;

useEffect( ()=>{

    console.log("Um milhão de linhas sendo carregada", chamadas);
    chamadas++;

},[clicado] );

  return (
    <main>
      <h2>Home</h2>
      <div>
        <p>Valor do STATE : {clicado}</p>
        <button onClick={() => setClicado(clicado + 1)}>ALTERAR VALOR = {clicado}</button>
      </div>
    </main>
  )
}