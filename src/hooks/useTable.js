import { useQuery } from "@tanstack/react-query"

const fetchTables = async () => {
  const res = await fetch("https://api-pi-fatec.onrender.com/participantesAulas")
  return res.json()
}

export const useTables = () => {
  const { data, errort, isLoadingt } = useQuery(["tables"], fetchTables)

  return {
    tables: data,
    isLoadingt,
    errort,
  }
}

const fetchTable = async (id) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/participantesAulas/${id}`)
  return res.json()
}

export const useTable = (id) => {
  const { data, errort, isLoadingt } = useQuery(["table", id], () => fetchTable(id))

  return {
    table: data,
    isLoadingt,
    errort,
  }
}