import { use, useEffect, useState } from "react";
import { useParams } from "react-router";

const listaProdutos = [

    { id: 1, nome: "Produto-1", preco: 23.90 },
    { id: 2, nome: "Produto-2", preco: 99.10 },
    { id: 3, nome: "Produto-3", preco: 132.40 },

];

export type product = {
    id: number,
    nome: string,
    preco: number
}

export default function EditarProdutos(){
    document.title = "Editar produtos";

    const { id } = useParams<{id:string}>();

    const[produto,setProduto] = useState<product>();

    useEffect(()=>{
        const produtoEncontrado = listaProdutos.find((p) => p.id === Number(id));
        setProduto(produtoEncontrado);
    },[]);

    return(
        <main>
            <h2>Editar Produtos</h2>
            <div>
                {
                    produto ? 
                    (<div>
                            <p>Nome: {produto.nome}</p>
                            <p>Preço: {produto.preco}</p>
                    </div>
                    ) : <p>Produto não encontrado</p>
                }
            </div>
        </main>
    )
}