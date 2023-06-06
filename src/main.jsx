import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider,} from "react-router-dom"
import theme from "./styles/theme"
import HomeHeader from './pages/components/HomeHeader'
import Userl from './pages/userl'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CreateUser from './pages/create'
import Login from './pages/login'
import Aulas from './pages/aulas'
import UpdateUser from './pages/update'
import UpdateAula from './pages/updateAulas'
import Smallfooter from './pages/components/Footer'
import Relacao from './pages/relacao'
import Tableu from './pages/tableR'
import Home from './pages/home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <><HomeHeader /><Home /><Smallfooter/></>,
  },
  {
    path: "/login",
    element: <><HomeHeader /><Login/><Smallfooter/></>,
  },
  {
    path: "/userl",
    element: <><HomeHeader /><Userl /></>,
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
    path: "/tableu/:id",
    element: <><HomeHeader /><Tableu /></>,
  },
  {
    path: "/aulas",
    element: <><HomeHeader /><Aulas /></>,
  },
  {
    path: "/editA/:id",
    element: <><HomeHeader /><UpdateAula /></>,
  },
  {
    path: "/relacao/:id",
    element: <><HomeHeader /><Relacao /></>,
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
