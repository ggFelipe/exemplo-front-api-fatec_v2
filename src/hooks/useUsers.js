import { useQuery } from "@tanstack/react-query"

const fetchUsers = async () => {
  const res = await fetch("https://api-pi-fatec.onrender.com/clientes")
  return res.json()
}

export const useUsers = () => {
  const { data, error, isLoading } = useQuery(["users"], fetchUsers)

  return {
    users: data,
    isLoading,
    error,
  }
}

const fetchUser = async (id) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/clientes/${id}`)
  return res.json()
}

export const useUser = (id) => {
  const { data, error, isLoading } = useQuery(["user", id], () => fetchUser(id))

  return {
    user: data,
    isLoading,
    error,
  }
}