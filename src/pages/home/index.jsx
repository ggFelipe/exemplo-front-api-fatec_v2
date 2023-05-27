import { useUsers } from "../../hooks/useUsers"
import { Box, Button, Container, Flex, Spacer, Stack, Divider } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useDeleteUser } from "../../hooks/mutationUser"

const Home = () => {
    const { users, isLoading, isError, error, refetch } = useUsers()

    const { mutate: mutateDeleteUser, isLoading: isLoadingDelete, isError: isErrorDelete } = useDeleteUser()

    const onDeleteUser = (id) => {
        mutateDeleteUser(id)
        if(isErrorDelete){
            alert('Erro ao excluir usuário!')
        } else {
            alert('Usuário excluído com sucesso!')
            refetch()
        }
    }

    return (
        <Container>
            <Flex margin={1}>
                <Box>App User</Box>
                <Spacer />
                <Box>
                    <Link to='/create'>Cadastrar</Link>
                </Box>
            </Flex>
            <h1>Lista de usuários</h1>
            <hr />
            {isLoading && <p>Carregando...</p>}
            {isError && <p>{error.message}</p>}
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                        Nome: {user.nome} CPF: {user.cpf}
                        <Stack  align='rigth'>
                        <Link size="sm" to={`/edit/${user.id}`}> Editar</Link>
                        <Button colorScheme="red" size="sm" isLoading={isLoadingDelete} onClick={() => {
                            if(window.confirm('Deseja excluir o usuário?')){
                                onDeleteUser(user.id)
                            }
                        } }>Excluir</Button>
                        <Divider />
                        </Stack>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default Home