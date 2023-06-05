import { useQuery } from "@tanstack/react-query"

const fetchTables = async () => {
  const res = await fetch("https://api-pi-fatec.onrender.com/participantesAulas")
  return res.json()
}

export const useTables = () => {
  const { data, error, isLoadingt } = useQuery(["tables"], fetchTables)

  return {
    tables: data,
    isLoadingt,
    error,
  }
}

const fetchTable = async (id) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/participantesAulas/${id}`)
  return res.json()
}

export const useTable = (id) => {
  const { data, error, isLoadingt } = useQuery(["table", id], () => fetchTable(id))

  return {
    table: data,
    isLoadingt,
    error,
  }
}