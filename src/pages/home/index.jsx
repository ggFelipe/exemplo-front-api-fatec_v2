import { useUsers } from "../../hooks/useUsers"
import HomeHeader from "../components/HomeHeader"
import { Box, Button, Container, Flex, Spacer, Stack, Divider, IconButton } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, AddIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { useDeleteUser } from "../../hooks/mutationUser"

const Home = () => {
    const { users, isLoading, isError, error, refetch } = useUsers()

    const { mutate: mutateDeleteUser, isLoading: isLoadingDelete, isError: isErrorDelete } = useDeleteUser()

    const onDeleteUser = (id) => {
        mutateDeleteUser(id)
        if (isErrorDelete) {
            alert('Erro ao excluir usuário!')
        } else {
            alert('Usuário excluído com sucesso!')
            refetch()
        }
    }

    return (
        <Flex  w="100%" h={["163px","250px","250px","335px"]} flexDir="column">
            <Flex margin={1}>
                <Box>LISTA DE USUÁRIOS</Box>
                <Spacer />
                <Box>
                    <Link to='/create'><IconButton top="auto" icon={<AddIcon />} colorScheme="green" size="sm"></IconButton></Link>
                </Box>
            </Flex>
            <Divider borderColor="black" />
            {isLoading && <p>Carregando...</p>}
            {isError && <p>{error.message}</p>}
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                        Nome: {user.nome} <br></br>CPF: {user.cpf}

                        <Stack align='rigth' spacing='10px'>

                            <Flex pos="fixed" right="1rem" >
                                <IconButton icon={<DeleteIcon />} top="-9" colorScheme="red" size="sm" isLoading={isLoadingDelete} onClick={() => {
                                    if (window.confirm('Deseja excluir o usuário?')) {
                                        onDeleteUser(user.id)
                                    }
                                }}>
                                </IconButton>
                                
                                <IconButton to={`/edit/${user.id}`} icon={<EditIcon />} top="-9" size="sm"></IconButton>
                                

                            </Flex>
                            <Divider borderColor="black" />
                        </Stack>

                    </li>
                ))}
            </ul>
        </Flex>
    );
}

export default Home