import { Flex, Box, Center, Card, CardBody } from "@chakra-ui/react"

const Relacao = () => {
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
                <Center>
                    <Flex margin={5}>
                        <Card><CardBody>
                            <Box fontStyle="revert" >LISTA DE ALUNOS</Box>
                        </CardBody></Card>
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
                                            <Td>{user.nome}</Td>
                                            <Td>{user.cpf}</Td>
                                            <Td>{user.endereco}</Td>
                                            <Td>{user.telefone}</Td>
                                            <Td isNumeric>{user.mensalidade}</Td>
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
                </Center>
            </Box>
        </Flex>
    )


}