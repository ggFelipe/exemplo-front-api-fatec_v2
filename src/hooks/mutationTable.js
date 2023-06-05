import { useMutation } from "@tanstack/react-query";

const createTable = async (table) => {
  const res = await fetch("https://api-pi-fatec.onrender.com/participantesAulas", {
    method: "POST",
    body: JSON.stringify(table),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useCreateTable = () => {
    return useMutation(createTable, {
        onError: (error) => {
            console.log(error)
        }
    })
}

const updateTable = async (table) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/participantesAulas/${table.id}`, {
    method: "PUT",
    body: JSON.stringify(table),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useUpdateTable = () => {
    return useMutation(updateTable, {
        onError: (error) => {
            console.log(error)
        }
    })
}

const deleteTable = async (id) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/participantesAulas/${id}`, {
    method: "DELETE",
  });

  return res.json();
}

export const useDeleteTable = () => {
    return useMutation(deleteTable, {
        onError: (error) => {
            console.log(error)
        }
    })
}