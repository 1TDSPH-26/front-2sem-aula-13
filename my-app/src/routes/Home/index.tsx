import { useEffect, useState } from "react"

export default function Home(){
    document.title = "Home"
    let chamada: number = 0
    const[clicado,setClicado] = useState<number>(0);

    useEffect(() => { 
        console.log("Um milhão de linhas carregadas", clicado)
    },[clicado])

    

    return(
        <main>
            <h2>Página Inicial</h2>

             <div>
                <p>valor STATE: {clicado}</p>
                <button onClick={()=>setClicado(clicado + 1)}>Alterar valor = {clicado}</button>
             </div>
        </main>
    )
}