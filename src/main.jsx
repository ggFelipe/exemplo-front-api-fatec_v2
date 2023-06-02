import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider,} from "react-router-dom"
import theme from "./styles/theme"
import HomeHeader from './pages/components/HomeHeader'
import Userl from './pages/userl'
import Sobre from './pages/sobre'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CreateUser from './pages/create'
import Login from './pages/login'
import Aulas from './pages/aulas'
import UpdateUser from './pages/update'
import BannerA from './pages/components/BannerAcademia'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><HomeHeader /><Login /></>,
  },
  {
    path: "/aulas",
    element: <><HomeHeader /><Aulas /></>,
  },
  {
    path: "/user",
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
  {
    path: "/userl",
    element: <><HomeHeader /><Userl /></>,
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
