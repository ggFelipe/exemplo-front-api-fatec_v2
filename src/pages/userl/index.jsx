import { useUsers } from "../../hooks/useUsers"
import CreateUser from "../create"
import {
    Box, Table,
    Thead,
    Tbody,
    Tr,
    Th, Icon, Text,
    Td, Button,
    TableContainer, Flex, Spacer, Divider, IconButton, Center, Card, CardBody, HStack, VStack
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon, AddIcon, CalendarIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { useDeleteUser } from "../../hooks/mutationUser"

const Userl = () => {
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
        <Flex w="100%" flexDir="column">
            <Box spacing='50' justify="center">
                <HStack spacing='50' justify="center">
                    <Center>
                    <CreateUser/>
                    </Center>
                    <VStack align='baseline'>
                    <Center>
                    <Link to='/Aulas'><Button colorScheme="green"  h='50px' w='13'><VStack spacing='0'>{<CalendarIcon />}<Text>Aulas</Text></VStack></Button></Link>
                    </Center>
                    <Center>
                        <Card><CardBody>
                            <Flex margin={5}>
                                <Box  fontStyle="revert" >LISTA DE USUÁRIOS</Box>
                                <Spacer />
                                <Box>
                                    <Link to='/user'><IconButton top="auto" icon={<AddIcon />} colorScheme="green" size="sm"></IconButton></Link>
                                </Box>
                            </Flex>
                            <Divider borderColor="gray" />
                            {isLoading && <p>Carregando...</p>}
                            {isError && <p>{error.message}</p>}
                            <ul>
                                <TableContainer>
                                    <Table colorScheme='' variant="striped" size='sm'>

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
                                                <Tr>
                                                    <Td textAlign='center'>{user.nome}</Td>
                                                    <Td textAlign='center'>{user.cpf}</Td>
                                                    <Td textAlign='center'>{user.endereco}</Td>
                                                    <Td textAlign='center'>{user.telefone}</Td>
                                                    <Td textAlign='center' isNumeric>{user.mensalidade}</Td>
                                                    <Td><Flex >

                                                        <Spacer />
                                                        <IconButton icon={<DeleteIcon />} colorScheme="red" size="sm" isLoading={isLoadingDelete} onClick={() => {
                                                            if (window.confirm('Deseja excluir o usuário?')) {
                                                                onDeleteUser(user.id)
                                                            }
                                                        }}>
                                                        </IconButton>
                                                        <Link to={`/edit/${user.id}`}>
                                                            <IconButton icon={<EditIcon />} size="sm">
                                                            </IconButton>
                                                        </Link>

                                                    </Flex></Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </ul>
                        </CardBody></Card>
                    </Center>
                    </VStack>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Userl