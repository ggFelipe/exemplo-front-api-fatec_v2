import { useMutation } from "@tanstack/react-query";

const createAula = async (user) => {
  const res = await fetch("https://api-pi-fatec.onrender.com/aulas", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useCreateAula = () => {
    return useMutation(createAula, {
        onError: (error) => {
            console.log(error)
        }
    })
}

const updateAula = async (user) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/aulas/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useUpdateAula = () => {
    return useMutation(updateAula, {
        onError: (error) => {
            console.log(error)
        }
    })
}

const deleteAula = async (id) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/aulas/${id}`, {
    method: "DELETE",
  });

  return res.json();
}

export const useDeleteAula = () => {
    return useMutation(deleteAula, {
        onError: (error) => {
            console.log(error)
        }
    })
}