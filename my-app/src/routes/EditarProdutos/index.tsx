import { useParams } from "react-router";


export default function EditarProdutos(){
    document.title = "Editar produtos";

    const { id } = useParams<{id:string}>();


    return(
        <main>
            <h2>Editar Produtos</h2>
            <p>Mostrar ID: {id}</p>
        </main>
    )
}