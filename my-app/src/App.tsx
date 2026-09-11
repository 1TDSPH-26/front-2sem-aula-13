<<<<<<< HEAD
import Cabecalho from "./components/Cabecalho/Cabecalho";
import { Outlet } from "react-router";
import Rodape from "./components/Rodape/Rodape";
import ObservadorDeRota from "./components/ObservadorDeRota";

export default function App(){
  return(
    <>
      <ObservadorDeRota/>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
=======
<<<<<<< HEAD
import { Outlet } from "react-router";
=======
import { Outlet } from 'react-router';
>>>>>>> 542d2a1ae7a5b20b1af3a41b819011948fbb0fae
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div>
      <Cabecalho />
<<<<<<< HEAD
      <Outlet/>
=======
      <Outlet /> 
>>>>>>> 542d2a1ae7a5b20b1af3a41b819011948fbb0fae
      <Rodape/>
    </div>
>>>>>>> 47448d4cbe13338020d2a53559da0250d9f6519a
  )
}