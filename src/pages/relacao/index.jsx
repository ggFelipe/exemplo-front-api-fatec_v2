import {
    Flex, Box, Center, Card, CardBody, Divider, TableContainer,
    Table, Thead, Tr, Th, Td, Tbody, Spacer, IconButton, Link
} from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { useParams } from 'react-router-dom';
import { useTables } from "../../hooks/useTable"
import { useDeleteTable } from "../../hooks/mutationTable"
import { useUsers } from "../../hooks/useUsers"
import { useAulas } from "../../hooks/useAulas"

const Relacao = () => {

    const { id } = useParams()

    const { tables, isLoadingt, isErrort, errort, refetcht } = useTables()
    const { mutate: mutateDeleteTable, isLoading: isLoadingDelete, isError: isErrorDelete } = useDeleteTable()
    
    const tabelaid = tables?.filter(Tables => Tables.IdAula == id)

    const onDeleteTable = (id) => {
        mutateDeleteTable(id)
        if (isErrorDelete) {
            alert('Erro ao excluir Relação!')
        } else {
            alert('Relação excluída com sucesso!')
            refetcht()
        }
    }

    return (

        <Flex w="100%" flexDir="column">
            <Box spacing='50' justify="center">
                <Center>
                    <Card><CardBody>
                        <Flex margin={1}>

                            <Box fontSize='13' fontStyle="revert" >LISTA DE ALUNOS</Box>

                        </Flex>
                        <Divider borderColor="gray" />
                        {isLoadingt && <p>Carregando...</p>}
                        {isErrort && <p>{errort.message}</p>}
                        <ul>
                            <TableContainer overflowY='auto' maxHeight="70px">
                                
                                <Table  colorScheme='' variant="striped" size='sm'>

                                    <Thead>
                                        <Tr>
                                            <Th fontSize='10' isNumeric>IdAula</Th>
                                            <Th fontSize='10' isNumeric>IdCliente</Th>
                                            <Th>  </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {tabelaid?.map((table) => (
                                            <Tr>
                                                <Td fontSize='10' isNumeric>{table.IdAula}</Td>
                                                <Td fontSize='10' isNumeric><Link href={`/edit/${table.IdCliente}`}>
                                                {table.IdCliente}
                                                    </Link></Td>
                                                <Td><Flex >

                                                    <Spacer />
                                                    <IconButton icon={<DeleteIcon />} colorScheme="red" size='xs' isLoading={isLoadingDelete} onClick={() => {
                                                        if (window.confirm('Deseja excluir o usuário?')) {
                                                            onDeleteTable(table.id)
                                                        }
                                                    }}>
                                                    </IconButton>
                                                </Flex></Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </ul>
                    </CardBody></Card>
                </Center>
            </Box>
        </Flex>
    )
}
export default Relacao