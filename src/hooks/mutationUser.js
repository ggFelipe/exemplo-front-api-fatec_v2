import { useMutation } from "@tanstack/react-query";

const createUser = async (user) => {
  const res = await fetch("https://api-pi-fatec.onrender.com/clientes", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useCreateUser = () => {
    return useMutation(createUser, {
        onError: (error) => {
            console.log(error)
        }
    })
}

const updateUser = async (user) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/clientes/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export const useUpdateUser = () => {
    return useMutation(updateUser, {
        onError: (error) => {
            console.log(error)
        }
    })
}

const deleteUser = async (id) => {
  const res = await fetch(`https://api-pi-fatec.onrender.com/clientes/${id}`, {
    method: "DELETE",
  });

  return res.json();
}

export const useDeleteUser = () => {
    return useMutation(deleteUser, {
        onError: (error) => {
            console.log(error)
        }
    })
}