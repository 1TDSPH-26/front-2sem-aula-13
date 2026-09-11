import { useEffect, useState } from "react"


export default function Home() {
    const[clicado, setClicado] = useState<number>(0)
    function adicionar(){
        if(clicado >= 10){            
            setClicado(10)
        }else{
            setClicado(clicado + 1)
        }
        

    }

    function diminuir() {
        if(clicado <=0){
            setClicado(0)
        }else{
            setClicado(clicado - 1)
        }
        
    }

    useEffect(() => { console.log(clicado) },[] )
    
    return(
        <div>
            <h1>Home </h1>
            <div>  
                <p>Valor de State: {clicado}</p>
                <p>{clicado >= 10 ? "Limite Maximo de 10": ""}</p>
                <p>{clicado <= 0 ? "Minímo de 0" : ""}</p>
                <button onClick={() => adicionar()}>Alterar valor</button>
                <button onClick={() => diminuir()}>diminuir</button>
            </div>
        </div>
    
    )
}