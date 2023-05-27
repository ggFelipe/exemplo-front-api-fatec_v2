import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Home from './pages/home'
import Sobre from './pages/sobre'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CreateUser from './pages/create'
import UpdateUser from './pages/update'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreateUser />,
  },
  {
    path: "/edit/:id",
    element: <UpdateUser />,
  },  
  {
    path: "/sobre",
    element: <Sobre />,
  },
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
