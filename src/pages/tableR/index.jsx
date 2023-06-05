import { useUsers } from "../../hooks/useUsers"
import {
    Box, Table, Thead, Tbody, FormLabel, Input, Select, Button, VisuallyHiddenInput,
    Tr, Th, Td, TableContainer, Flex, Spacer, Divider, IconButton,
    Center, Card, CardBody, HStack, Stack, VStack, Heading, FormControl
} from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { useCreateTable } from "../../hooks/mutationTable"
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import { useAula } from "../../hooks/useAulas";
import { useUpdateAula } from "../../hooks/mutationAulas";

const Tableu = () => {
    const {
        reset,
        register,
        handleSubmit
    } = useForm()
    
    const { users, isLoading, isError, error } = useUsers()
    const { mutate: mutateCreateTable, isLoadingt, isErrort } = useCreateTable()

    const { id } = useParams()

    const { usera, isLoadinga } = useAula(id)

    

    const { mutate: mutateUpdateAula, isLoadinga: isLoadingUpdate, isErrora } = useUpdateAula()

    const onSubmit = (data) => {
        data.id = id
        mutateUpdateAula(data)
        if (!isErrora) {

            alert('Aula atualizado com sucesso!')
        }
    }

    const onSubmitt = (table) => {
        mutateCreateTable(table)
        if (!isErrort) {
            reset()
            alert('Relação cadastrado com sucesso!')
        }
    }

    return (
        <Flex w="100%" flexDir="column">
            <Box spacing='50' justify="center">
                <HStack spacing='50' justify="center">

                    <Center>

                        <Stack spacing='4'>
                            <VStack as='header' spacing='6' mt='8'>
                                <Heading fontWeight="300" fontSize="24px" letterSpacing='-0.5px'>Atualizar informaçoes da Aula</Heading>
                            </VStack>
                            <Card bg='#F0FFF0' variante='outline' borderColor='#d8dee4'><CardBody><Stack>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {isLoadinga || !usera ? <p>Carregando...</p> : <Stack>
                                        <FormControl id="nomeAula">
                                            <FormLabel textColor='black'>Aula</FormLabel>
                                            <Input defaultValue={usera.nomeAula} type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('nomeAula', { required: true })} />
                                        </FormControl>
                                        <FormControl id="descricao">
                                            <FormLabel textColor='black'>Descrição</FormLabel>
                                            <Input defaultValue={usera.descricao} type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('descricao', { required: true })} />
                                        </FormControl>
                                        <FormControl id="data">
                                            <FormLabel textColor='black'>Data</FormLabel>
                                            <Select type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('data', { required: true })}>
                                                <option>segunda</option>
                                                <option>terça</option>
                                                <option>quarta</option>
                                                <option>quinta</option>
                                                <option>sexta</option>
                                                <option>sabado</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl id="hora">
                                            <FormLabel textColor='black'>Telefone</FormLabel>
                                            <Input defaultValue={usera.hora} type="time" textColor='black' bg='white' borderColor='#d8dee4' {...register('hora', { required: true })} />
                                        </FormControl>
                                        <FormControl id="limiteAlunos">
                                            <FormLabel textColor='black'>Limite de Alunos</FormLabel>
                                            <Input defaultValue={usera.limiteAlunos} type="number" textColor='black' bg='white' borderColor='#d8dee4' {...register('limiteAlunos', { required: true })} />
                                        </FormControl>

                                        <Button mt={4} colorScheme='teal' type="submit" isLoading={isLoadingUpdate}>
                                            Atualizar
                                        </Button>
                                    </Stack>}
                                </form>
                            </Stack></CardBody></Card>
                        </Stack>

                    </Center>

                    <Center>
                        <Card><CardBody>
                            <Flex margin={5}>
                                <Box fontStyle="revert" >LISTA DE USUÁRIOS</Box>
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
                                                    
                                                    <Td>{user.nome}</Td>
                                                    <Td>{user.cpf}</Td>
                                                    <Td>{user.endereco}</Td>
                                                    <Td>{user.telefone}</Td>
                                                    <Td isNumeric>{user.mensalidade}</Td>
                                                    <Td>
                            
                                                        
                                                        <form onSubmit={handleSubmit(onSubmitt)}>
                                                        <Stack>
                                                        <FormControl id="IdCliente">
                                                            <VisuallyHiddenInput type='number' value={user.id} {...register('IdCliente', { required: true })} />
                                                        </FormControl>
                                                        <FormControl id="IdAula">
                                                            <VisuallyHiddenInput type='number' value={id} {...register('IdAula', { required: true })} />
                                                        </FormControl>
                                                    
                                                        <Button  type="submit" colorScheme="red" size="sm" isLoading={isLoadingt}>
                                                        +
                                                        </Button>
                                                        </Stack>
                                                        </form>
                                                    
                                                    </Td>

                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </ul>
                        </CardBody></Card>
                    </Center>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Tableu