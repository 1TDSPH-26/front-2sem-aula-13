import { useEffect, useState } from "react";


export default function Home() {
    document.title = "Home";

    const[clicado,setClicado] = useState<number>(0)
    const addClicado = () => {setClicado(clicado+1)}

    useEffect(()=>{console.log("Um milhão de linhas sendo carregas: ", clicado)},[]);

    return (
        <main>
            <h2>Home</h2>
            <div>
                <p>Valor do STATE: {clicado}</p>
                <button onClick={addClicado}>ALTERAR VALOR = {clicado}</button>
            </div>
        </main>
    )
}