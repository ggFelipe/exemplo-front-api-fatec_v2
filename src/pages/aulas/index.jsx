import {
    FormLabel, Box, Card, CardBody,
    SimpleGrid, Stack, Input,
    TableContainer, Table, Thead, Tbody,
    Tr, Th, Td, Center, HStack, VStack, Heading,
    FormControl, Button, Link, Text
} from "@chakra-ui/react"

const Aulas = () => {
    return (
        <Box mt={50}>
            <HStack spacing='50' justify="center">
                <Center>
                    <Stack spacing='4'>
                        <Card bg='#f6f8fa' variante='outline' borderColor='#d8dee4' maxW='308px'>
                            <CardBody>

                                <form>
                                    <Stack>
                                        <Heading textColor='black' fontSize="18px" letterSpacing='-0.5px'>Registrar Aula</Heading>
                                        <FormControl>
                                            <FormLabel textColor='black' size='sm'>Aula</FormLabel>
                                            <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel textColor='black' size='sm'>Descrição</FormLabel>
                                            <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel textColor='black' size='sm'>Data</FormLabel>
                                            <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel textColor='black' size='sm'>Limite de Alunos</FormLabel>
                                            <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' />
                                        </FormControl>
                                        <Button bg='#2da44e' color='white' size='sm' _hover={{ bg: '#2c974b' }} _active={{ bg: '#298e46' }}>Criar</Button>
                                    </Stack>
                                </form>
                            </CardBody>
                        </Card>
                    </Stack>
                </Center>

                <Center>
                    <SimpleGrid columns={3} spacing='4px' maxW='750px'>

                        <Card borderColor='#d8dee4' bg='#f6f8fa' maxW='250px' maxH='250px'><CardBody>
                            <TableContainer>
                                <Table textColor='black' size='50%'>
                                    <Thead fontSize='12'>
                                        <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Seg</Heading>
                                        <Tr>
                                            <Th>Aula</Th>
                                            <Th>Hora</Th>
                                            <Th>Estado</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Natação</Td>
                                            <Td>14:00</Td>
                                            <Td>?/20</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody></Card>
                        <Card borderColor='#d8dee4' bg='#f6f8fa' maxW='250px' maxH='250px'><CardBody>
                            <TableContainer>
                                <Table textColor='black' size='50%'>
                                    <Thead fontSize='12'>
                                        <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Ter</Heading>
                                        <Tr>
                                            <Th>Aula</Th>
                                            <Th>Hora</Th>
                                            <Th>Estado</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Natação</Td>
                                            <Td>14:00</Td>
                                            <Td>?/20</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody></Card>
                        <Card borderColor='#d8dee4' bg='#f6f8fa' maxW='250px' maxH='250px'><CardBody>
                            <TableContainer>
                                <Table textColor='black' size='50%'>
                                    <Thead fontSize='12'>
                                        <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Qua</Heading>
                                        <Tr>
                                            <Th>Aula</Th>
                                            <Th>Hora</Th>
                                            <Th>Estado</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Natação</Td>
                                            <Td>14:00</Td>
                                            <Td>?/20</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody></Card>
                        <Card borderColor='#d8dee4' bg='#f6f8fa' maxW='250px' maxH='250px'><CardBody>
                            <TableContainer>
                                <Table textColor='black' size='50%'>
                                    <Thead fontSize='12'>
                                        <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Qui</Heading>
                                        <Tr>
                                            <Th>Aula</Th>
                                            <Th>Hora</Th>
                                            <Th>Estado</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Natação</Td>
                                            <Td>14:00</Td>
                                            <Td>?/20</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody></Card>
                        <Card borderColor='#d8dee4' bg='#f6f8fa' maxW='250px' maxH='250px'><CardBody>
                            <TableContainer>
                                <Table textColor='black' size='50%'>
                                    <Thead fontSize='12'>
                                        <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Sex</Heading>
                                        <Tr>
                                            <Th>Aula</Th>
                                            <Th>Hora</Th>
                                            <Th>Estado</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Natação</Td>
                                            <Td>14:00</Td>
                                            <Td>?/20</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody></Card>
                        <Card borderColor='#d8dee4' bg='#f6f8fa' maxW='250px' maxH='250px'><CardBody>
                            <TableContainer>
                                <Table textColor='black' size='50%'>
                                    <Thead fontSize='12'>
                                        <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Sab</Heading>
                                        <Tr>
                                            <Th>Aula</Th>
                                            <Th>Hora</Th>
                                            <Th>Estado</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Natação</Td>
                                            <Td>14:00</Td>
                                            <Td>?/20</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody></Card>
                    </SimpleGrid>
                </Center>
            </HStack>
        </Box>
    )
}
export default Aulas