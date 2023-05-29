import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider,} from "react-router-dom"
import theme from "./styles/theme"
import HomeHeader from './pages/components/HomeHeader'
import Home from './pages/home'
import Sobre from './pages/sobre'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CreateUser from './pages/create'
import UpdateUser from './pages/update'
import BannerA from './pages/components/BannerAcademia'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><HomeHeader /><BannerA/><Home /></>,
  },
  {
    path: "/create",
    element: <><HomeHeader /><CreateUser /></>,
  },
  {
    path: "/edit/:id",
    element: <><HomeHeader /><UpdateUser /></>,
  },  
  {
    path: "/sobre",
    element: <><HomeHeader /><Sobre /></>,
  },
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
