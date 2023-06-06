import {
    FormLabel, Box, Card, CardBody,
    SimpleGrid, Stack, Input,
    TableContainer, Table, Thead, Tbody,
    Tr, Th, Td, Center, HStack, VStack, Heading,
    FormControl, Button, Text, Select
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom"
import { useCreateAula } from "../../hooks/mutationAulas"
import { useAulas } from "../../hooks/useAulas"
const Aulas = () => {
    const {
        reset,
        register,
        handleSubmit
    } = useForm()

    const { mutate: mutateCreateAula, isLoadinga, isError } = useCreateAula()
    const { usersa, error, refetch } = useAulas()
    const segunda = usersa?.filter(Aulas => Aulas.data === 'segunda')
    const terça = usersa?.filter(Aulas => Aulas.data === 'terça')
    const quarta = usersa?.filter(Aulas => Aulas.data === 'quarta')
    const quinta = usersa?.filter(Aulas => Aulas.data === 'quinta')
    const sexta = usersa?.filter(Aulas => Aulas.data === 'sexta')
    const sabado = usersa?.filter(Aulas => Aulas.data === 'sabado')

    const onSubmit = (data) => {
        mutateCreateAula(data)
        if (!isError) {
            reset()
            alert('Aula cadastrado com sucesso!')
        }
    }

    return (
        <Box mt={50}>
            <HStack spacing='50' justify="center">
                <Center>
                    <Stack spacing='4'>
                        <VStack as='header' spacing='6' mt='8'>
                            <Heading fontWeight="300" fontSize="18px" letterSpacing='-0.5px'>Cadastrar Aula</Heading>
                        </VStack>
                        <Card variante='outline' borderColor='#d8dee4' maxW='308px'>
                            <CardBody>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Stack>
                                        <FormControl>
                                            <FormLabel size='sm'>Aula</FormLabel>
                                            <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' {...register('nomeAula', { required: true })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel size='sm'>Descrição</FormLabel>
                                            <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' {...register('descricao', { required: true })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel size='sm'>Dia</FormLabel>
                                            <Select type="text" textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' {...register('data', { required: true })}>
                                                <option>segunda</option>
                                                <option>terça</option>
                                                <option>quarta</option>
                                                <option>quinta</option>
                                                <option>sexta</option>
                                                <option>sabado</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel size='sm'>Data</FormLabel>
                                            <Input type='time' textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' {...register('hora', { required: true })} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel size='sm'>Limite de Alunos</FormLabel>
                                            <Input type="number" textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' {...register('limiteAlunos', { required: true })} />
                                        </FormControl>
                                        <Button bg='#2da44e' color='white' size='sm' _hover={{ bg: '#2c974b' }} _active={{ bg: '#298e46' }} type="submit" isLoading={isLoadinga}>Criar</Button>
                                    </Stack>
                                </form>
                            </CardBody>
                        </Card>
                    </Stack>
                </Center>

                <Center>
                    <SimpleGrid columns={3} spacing='4px'>

                        <Card maxW='270px' maxH='270px'><CardBody>
                            {isLoadinga && <p>Carregando...</p>}
                            {isError && <p>{error.message}</p>}
                            <ul>
                                <TableContainer >
                                    <Table colorScheme='' variant="striped" size='sm'>
                                        <Thead fontSize='12'>
                                            <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Seg</Heading>
                                            <Tr fontSize='10'>
                                                <Th textAlign='center'>Aula</Th>
                                                <Th textAlign='center'>Hora</Th>
                                                <Th textAlign='center'>Limite</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody fontSize='12'>
                                            {segunda?.map((user) => (

                                                <Tr>
                                                    <Td textAlign='center'>
                                                        <Link to={`/tableu/${user.id}`}>{user.nomeAula}</Link>
                                                    </Td>
                                                    <Td textAlign='center'>{user.hora}</Td>
                                                    <Td textAlign='center'>{user.limiteAlunos}</Td>
                                                </Tr>

                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </ul>
                        </CardBody></Card>
                        <Card maxW='270px' maxH='270px'><CardBody>
                            {isLoadinga && <p>Carregando...</p>}
                            {isError && <p>{error.message}</p>}
                            <ul>
                                <TableContainer>
                                    <Table colorScheme='' variant="striped" size='sm' >
                                        <Thead fontSize='12'>
                                            <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Ter</Heading>
                                            <Tr fontSize='10'>
                                                <Th textAlign='center'>Aula</Th>
                                                <Th textAlign='center'>Hora</Th>
                                                <Th textAlign='center'>Limite</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody fontSize='12'>
                                            {terça?.map((user) => (

                                                <Tr>
                                                    <Td textAlign='center'><Link href={`/editA/${user.id}`}>
                                                        {user.nomeAula}
                                                    </Link></Td>
                                                    <Td textAlign='center'>{user.hora}</Td>
                                                    <Td textAlign='center'>{user.limiteAlunos}</Td>
                                                </Tr>

                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </ul>
                        </CardBody></Card>
                        <Card maxW='270px' maxH='270px'><CardBody>
                            {isLoadinga && <p>Carregando...</p>}
                            {isError && <p>{error.message}</p>}
                            <ul>
                                <TableContainer>
                                    <Table colorScheme='' variant="striped" size='sm'>
                                        <Thead fontSize='12'>
                                            <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Qua</Heading>
                                            <Tr fontSize='10' >
                                                <Th textAlign='center'>Aula</Th>
                                                <Th textAlign='center'>Hora</Th>
                                                <Th textAlign='center'>Limite</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody fontSize='12'>
                                            {quarta?.map((user) => (

                                                <Tr>
                                                    <Td textAlign='center'><Link href={`/editA/${user.id}`}>
                                                        {user.nomeAula}
                                                    </Link></Td>
                                                    <Td textAlign='center'>{user.hora}</Td>
                                                    <Td textAlign='center'>{user.limiteAlunos}</Td>
                                                </Tr>

                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </ul>
                        </CardBody></Card>
                        <Card maxW='270px' maxH='270px'><CardBody>
                            {isLoadinga && <p>Carregando...</p>}
                            {isError && <p>{error.message}</p>}
                            <ul>
                                <TableContainer>
                                    <Table colorScheme='' variant="striped" size='sm'>
                                        <Thead fontSize='12'>
                                            <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Qui</Heading>
                                            <Tr fontSize='10'>
                                                <Th textAlign='center'>Aula</Th>
                                                <Th textAlign='center'>Hora</Th>
                                                <Th textAlign='center'>Limite</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody fontSize='12'>
                                            {quinta?.map((user) => (

                                                <Tr>
                                                    <Td textAlign='center'><Link href={`/editA/${user.id}`}>
                                                        {user.nomeAula}
                                                    </Link></Td>
                                                    <Td textAlign='center'>{user.hora}</Td>
                                                    <Td textAlign='center'>{user.limiteAlunos}</Td>
                                                </Tr>

                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </ul>
                        </CardBody></Card>
                        <Card maxW='270px' maxH='270px'><CardBody>
                            {isLoadinga && <p>Carregando...</p>}
                            {isError && <p>{error.message}</p>}
                            <ul>
                                <TableContainer>
                                    <Table colorScheme='' variant="striped" size='sm'>
                                        <Thead fontSize='12'>
                                            <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Sex</Heading>
                                            <Tr fontSize='10'>
                                                <Th textAlign='center'>Aula</Th>
                                                <Th textAlign='center'>Hora</Th>
                                                <Th textAlign='center'>Limite</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody fontSize='12'>
                                            {sexta?.map((user) => (

                                                <Tr>
                                                    <Td textAlign='center'><Link href={`/editA/${user.id}`}>
                                                        {user.nomeAula}
                                                    </Link></Td>
                                                    <Td textAlign='center'>{user.hora}</Td>
                                                    <Td textAlign='center'>{user.limiteAlunos}</Td>
                                                </Tr>

                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </ul>
                        </CardBody></Card>
                        <Card maxW='270px' maxH='270px'><CardBody>
                            {isLoadinga && <p>Carregando...</p>}
                            {isError && <p>{error.message}</p>}
                            <ul>
                                <TableContainer>
                                    <Table colorScheme='' variant="striped" size='sm'>
                                        <Thead fontSize='12'>
                                            <Heading alignSelf='center' fontSize="15px" letterSpacing='-0.5px'>Sab</Heading>
                                            <Tr fontSize='10'>
                                                <Th textAlign='center'>Aula</Th>
                                                <Th textAlign='center'>Hora</Th>
                                                <Th textAlign='center'>Limite</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody fontSize='12'>
                                            {sabado?.map((user) => (

                                                <Tr>
                                                    <Td textAlign='center'><Link href={`/editA/${user.id}`}>
                                                        {user.nomeAula}
                                                    </Link></Td>
                                                    <Td textAlign='center'>{user.hora}</Td>
                                                    <Td textAlign='center'>{user.limiteAlunos}</Td>
                                                </Tr>

                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </ul>
                        </CardBody></Card>
                    </SimpleGrid>
                </Center>
            </HStack>
        </Box>
    )
}
export default Aulas