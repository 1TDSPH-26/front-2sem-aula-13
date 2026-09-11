import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';

const router = createBrowserRouter([
<<<<<<< HEAD
  {path:'/', element: <App/>, errorElement: <Error/>, children:[
    {path: '/', element: <Home/>},
    {path:'/produtos',element:<Produtos/>},
    {path:'/editar-produtos', element:<EditarProdutos/>},
  ]},
=======
  {path: '/', element: <App />, errorElement: <Error />, children: [
    {path: '/', element: <Home />},
    {path: '/produtos', element: <Produtos />},
    {path: '/editar-produtos', element: <EditarProdutos />}

]},
>>>>>>> 542d2a1ae7a5b20b1af3a41b819011948fbb0fae

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)