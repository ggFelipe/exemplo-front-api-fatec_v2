import { useUsers } from "../../hooks/useUsers"
import {
    Box, Button, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Flex, Spacer, Stack, Divider, IconButton
} from '@chakra-ui/react'
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
        <Flex w="100%" h={["163px", "250px", "250px", "335px"]} flexDir="column">
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
                <TableContainer>
                    <Table size='sm'>

                        <Thead>
                            <Tr>
                                <Th>Nome</Th>
                                <Th>CPF</Th>
                                <Th>Endereço</Th>
                                <Th>Telefone</Th>
                                <Th isNumeric>Mensalidade</Th>
                                <Th>  </Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {users?.map((user) => (
                                <li key={user.id}>
                                    <Tr>
                                        <Td>{user.nome}</Td>
                                        <Td>{user.cpf}</Td>
                                        <Td>{user.endereco}</Td>
                                        <Td>{user.telefone}</Td>
                                        <Td isNumeric>{user.mensalidade}</Td>
                                    </Tr>
                                    <Flex right="1rem" >

                                        <Spacer />
                                        <IconButton icon={<DeleteIcon />} top="-9" colorScheme="red" size="sm" isLoading={isLoadingDelete} onClick={() => {
                                            if (window.confirm('Deseja excluir o usuário?')) {
                                                onDeleteUser(user.id)
                                            }
                                        }}>
                                        </IconButton>
                                        <Link to={`/edit/${user.id}`}>
                                            <IconButton icon={<EditIcon />} top="-9" size="sm">
                                            </IconButton>
                                        </Link>

                                    </Flex>
                                </li>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </ul>
        </Flex>
    );
}

export default Home