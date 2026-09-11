<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 47448d4cbe13338020d2a53559da0250d9f6519a
import { useState } from "react";
import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo() {

<<<<<<< HEAD
    let nome: string | null = "Alê";
    const[nomeState, setNomeState] = useState<String | null>("Joel");

    function alteraNome(){
        nome = prompt("Digite seu nome:");
        console.log("Nome digitado: ", nome);

    }
    function alteraState() {
        const nome: string | null = prompt("digite seu nome:")
        setNomeState(nome);
        console.log("Nome digitado: ", nomeState);
    }

    return (
        <main>
            <div>
                <p>Nome : {nome}</p>
                <button onClick={alteraNome}>Nome = {nome}</button>
            </div>
            <div>
                <p>Nome State: {nomeState}</p>
                <button onClick={alteraState}>Nome = {nomeState}</button>
            </div>
            <section>
                <h2>Conteúdo básico</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero cumque dolore asperiores dolorum eaque commodi numquam adipisci? Quibusdam optio repellat non. Repellat, corporis veniam velit aliquid repellendus autem pariatur. Libero?</p>
            </section>
            <section>
                <h2>Exemplo de imagem</h2>
                <figure>
                    <img src="https://placehold.co/400x400/1c1c1c1/000000/png" alt="Imagem e exemplo" />
                    <figcaption>Bloco de imagens 400 x 400</figcaption>
                </figure>
                <figure>
                    <img src={imgQuadrada} alt="Imagem e exemplo" />
                    <figcaption>Bloco de imagens 400 x 400</figcaption>
                </figure>
            </section>
            <section>
                <h2>Especial</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eligendi repellendus a incidunt nam assumenda animi, dolore consectetur iure rerum repudiandae. Recusandae molestias doloremque, velit cum quibusdam eius fugiat optio voluptates repellendus tempore! Illum, a iure! Natus quos aliquid in cupiditate corrupti vel atque, dignissimos distinctio consequatur sit nostrum saepe.</p>
            </section>
        </main>
    )
}
=======
  let nome: string | null = "Alê";

  const [nomeState, setNomeState] = useState<string | null>("Joel");

  function alteraNome() {
    nome = prompt("Digite o novo nome : ");
    console.log("Nome digitado: ", nome);
  }

  function alteraState() {
    const nome: string | null = prompt("digite seu nome:")
    setNomeState((nomeStateAnterior) => nomeStateAnterior = nome);
    console.log("Nome digitado: ", nomeState);
  }

  return (
    <main>
      <div>
        <p>Nome : {nome}</p>
        <button onClick={alteraNome}>Nome = {nome}</button>
      </div>
      <div>
        <p>Nome State: {nomeState}</p>
        <button onClick={alteraState}>Nome = {nomeState}</button>
      </div>
      <section>
        <h2>Conteúdo Básico</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          soluta sed vero reiciendis enim nam, aut perferendis, sit velit
          ratione placeat, distinctio eius rerum maxime id perspiciatis
          repudiandae non! Tenetur.
        </p>
      </section>
      <section>
        <h2>Exemplo de Imagens</h2>
        {/* Esta imagem tem referência externa */}
        <figure>
          <img
            src="https://placehold.co/400x400/c1c1c1/000000/png"
            alt="Exemplo de imagem"
          />
          <figcaption>Bloco de Imagem 400 x 400</figcaption>
        </figure>

        {/* Esta imagem tem referência interna na /src */}
        <figure>
          <img src={imgQuadrada} alt="Exemplo de imagem" />
          <figcaption>Bloco de Imagem 400 x 400</figcaption>
        </figure>

        {/* Esta imagem tem referência interna na public */}
        <figure>
          <img src="/img/quadrado.png" alt="Exemplo de imagem" />
          <figcaption>Bloco de Imagem 400 x 400</figcaption>
        </figure>
      </section>

      <section >
        <h2>Especial</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vitae recusandae? Inventore impedit earum nisi reiciendis provident autem cum aliquam natus excepturi ut distinctio, laborum veritatis, veniam fugiat exercitationem quam iusto accusantium culpa reprehenderit quas quibusdam. Nulla, quibusdam cumque? Quibusdam dolorum dolore deserunt. Assumenda eos voluptatibus dolores eaque fugit quod?</p>
      </section>

    </main>
  );
}
=======
import { useState } from "react";
import imgQuadrado from "../../img/png.png";



export default function Conteudo() {


      const[mostraSecao, setMostraSecao] = useState(false);

      const alternaSecao = () => {
      
        setMostraSecao(!mostraSecao);
        console.log(mostraSecao);

      }

  return (
    <main>
      <h2>Conteúdo Básico</h2>
      <p>Este é o conteúdo principal da minha aplicação.</p>

      <section>
        <h2>Exemplo de Imagem</h2>
        {/*Esta imagem tem referencia externa*/}
        <figure>
          <img src="https://placehold.co/600x400/1c1c1c1/00000/png" alt="Exemplo de Imagem" />
          <figcaption>Bloco de Imagem 600 x 400</figcaption>
        </figure>

         {/*Esta imagem tem referencia interna na /src*/}
        <figure>
          <img src={imgQuadrado} alt="Exemplo de Imagem" />
          <figcaption>Bloco de Imagem 600 x 400</figcaption>
        </figure>

         {/*Esta imagem tem referencia interna na public*/}
        <figure>
          <img src="/png.png" alt="Exemplo de Imagem" />
          <figcaption>Bloco de Imagem 600 x 400</figcaption>
        </figure>
      </section>

      <section>
        <h2>Especial</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo deleniti dignissimos, praesentium et voluptas in temporibus assumenda eligendi delectus sapiente commodi molestias cum adipisci itaque nihil magni dolorum quo esse quos? Voluptas, eligendi. Placeat consectetur autem in delectus accusantium, modi rerum. Harum velit earum ea quaerat, corrupti maxime ipsum minus.</p>
      </section>
      <button onClick={alternaSecao}>{mostraSecao ? "ESCONDE" : "MOSTRAR"}</button>
    </main>
  );
}
>>>>>>> 61c27dd30471a42e29beceb8e9d990298b060df3
>>>>>>> 47448d4cbe13338020d2a53559da0250d9f6519a
