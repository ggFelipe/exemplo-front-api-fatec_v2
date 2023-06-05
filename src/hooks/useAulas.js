import { useQuery } from "@tanstack/react-query"

const fetchAulas = async () => {
  const res = await fetch("https://api-pi-fatec.onrender.com/aulas")
  return res.json()
}

export const useAulas = () => {
  const { data, error, isLoadinga } = useQuery(["users"], fetchAulas)

  return {
    users: data,
    isLoadinga,
    error,
  }
}

const fetchAula = async (id) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/aulas/${id}`)
  return res.json()
}

export const useAula = (id) => {
  const { data, error, isLoadinga } = useQuery(["user", id], () => fetchAula(id))

  return {
    usera: data,
    isLoadinga,
    error,
  }
}