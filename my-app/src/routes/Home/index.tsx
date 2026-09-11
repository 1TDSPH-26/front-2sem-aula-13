import { useEffect, useState } from "react";

export default function Home() {

    document.title = "Home";

    const [clicado, setClicado] = useState<number>(0);

    useEffect(() => { console.log("1 milhão de linhas sendo carregadas: ", clicado) }, [clicado]);

    return (
        <main>
            <h2>Home</h2>
            <div>
                <p>Valor do State: {clicado}</p>
                <button onClick={() => setClicado(clicado + 1)}>Alterar valor = {clicado}</button>
            </div>
        </main>
    )
}