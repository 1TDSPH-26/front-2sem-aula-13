import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
<<<<<<< HEAD
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Error from './routes/Error/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<Error />,
    children:[
      { path:'/', element:<Home/>},
      { path:'/produtos', element:<Produtos/>},
      { path:'/editar-produtos', element:<EditarProdutos /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
=======

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
>>>>>>> 47448d4cbe13338020d2a53559da0250d9f6519a
