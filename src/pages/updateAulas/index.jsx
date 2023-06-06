import {
    Container, Stack,
    FormControl, FormLabel,
    Input, Button, Card, CardBody, VStack,
    Heading, Select, Alert
} from "@chakra-ui/react"

import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import { useAula } from "../../hooks/useAulas";
import { useUpdateAula } from "../../hooks/mutationAulas";

const UpdateAula = () => {
    const { id } = useParams()

    const { usera, isLoadinga } = useAula(id)

    const {
        register,
        handleSubmit
    } = useForm()

    const { mutate: mutateUpdateAula, isLoadinga: isLoadingUpdate, isError } = useUpdateAula()

    const onSubmit = (data) => {
        data.id = id
        mutateUpdateAula(data)
        if (!isError) {
            
            alert('Aula atualizado com sucesso!')
        }
    }

    return (
        <Container>
            <Stack spacing='4'>
                <VStack as='header' spacing='6' mt='8'>
                    <Heading fontWeight="300" fontSize="24px" letterSpacing='-0.5px'>Atualizar informaçoes da Aula</Heading>
                </VStack>
                <Card variante='outline' borderColor='#d8dee4'><CardBody><Stack>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {isLoadinga || !usera ? <p>Carregando...</p> : <Stack>
                            <FormControl id="nomeAula">
                                <FormLabel >Aula</FormLabel>
                                <Input defaultValue={usera.nomeAula} type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('nomeAula', { required: true })} />
                            </FormControl>
                            <FormControl id="descricao">
                                <FormLabel >Descrição</FormLabel>
                                <Input defaultValue={usera.descricao} type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('descricao', { required: true })} />
                            </FormControl>
                            <FormControl id="data">
                                <FormLabel>Data</FormLabel>
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
                                <FormLabel>Telefone</FormLabel>
                                <Input defaultValue={usera.hora} type="time" textColor='black' bg='white' borderColor='#d8dee4' {...register('hora', { required: true })} />
                            </FormControl>
                            <FormControl id="limiteAlunos">
                                <FormLabel>Limite de Alunos</FormLabel>
                                <Input defaultValue={usera.limiteAlunos} type="number" textColor='black' bg='white' borderColor='#d8dee4' {...register('limiteAlunos', { required: true })} />
                            </FormControl>

                            <Button mt={4} colorScheme='teal' type="submit" isLoading={isLoadingUpdate}>
                                Atualizar
                            </Button>
                        </Stack>}
                    </form>
                </Stack></CardBody></Card>
            </Stack>
        </Container>
    )
}

export default UpdateAula