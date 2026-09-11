import { useEffect, useState } from "react";

export default function Home() {
  document.title = "Home";
  const[clicado,Setclicado] = useState<number>(0);

  useEffect( ()=>{
    console.log("Um Milhão de linhas sendo carregadas:", clicado);
  },[clicado] );
  
  return (
    <main>
        <h2>Home</h2>
        <div>
          <p>Valor do STATE : {clicado}</p>
          <button onClick={()=> Setclicado(clicado + 1)}>ALTERAR VALOR = {clicado}</button>
        </div>
    </main>
  )
}
