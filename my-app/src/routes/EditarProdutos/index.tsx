import { useEffect, useState } from "react";
import { useParams } from "react-router";

const listaProdutos = [

  { id: 1, nome: "Produto-1", preco: 23.90 },
  { id: 2, nome: "Produto-2", preco: 99.10 },
  { id: 3, nome: "Produto-3", preco: 132.40 },

];

export default function EditarProdutos() {
  document.title = "Editar Produtos";

const { id } = useParams<{id:String}>();

const{produto,setProduto} = useState<{id:Number,none:String,preco:Number}>({} as { id: number, nome: String, preco: number});

useEffect{ ()=> {

  const produoEncontrado = listaProdutos.find( (p)=> p.id === Number{id} );

  setProduto(produoEncontrado)

},[]};

}

return (
  <main>
    <h2>Editar Produtos</h2>
    <p>ID : {id}</p>

    <div>

      {produto ?
        (
          <div>
            <p>Nome : {produto.nome}</p>
            <p>Preço: {produto.preco}</p>
          </div>
        ) :
        (<p>Produto não encontrado!</p>)
      }

    </div>

  </main>
)
}
