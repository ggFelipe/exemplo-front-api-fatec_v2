import {
    Container, Stack,
    FormControl, FormLabel,
    Input, Button, Card, CardBody,
    VStack, Heading
} from "@chakra-ui/react"

import { useForm } from 'react-hook-form'
import { useCreateUser } from "../../hooks/mutationUser"

const CreateUser = () => {
    const {
        reset,
        register,
        handleSubmit
    } = useForm()

    const { mutate: mutateCreateUser, isLoading, isError } = useCreateUser()

    const onSubmit = (data) => {
        mutateCreateUser(data)
        if (!isError) {
            reset()
            alert('Usuário cadastrado com sucesso!')
        }
    }

    return (
        <Container>
            <Stack spacing='4'>
                <VStack as='header' spacing='6' mt='8'>
                    <Heading fontWeight="300" fontSize="24px" letterSpacing='-0.5px'>Cadastrar Usuário</Heading>
                </VStack>
                <Card bg='#f6f8fa' variante='outline' borderColor='#d8dee4'><CardBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack>
                            <FormControl id="nome">
                                <FormLabel textColor='black'>Nome</FormLabel>
                                <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('nome', { required: true })} />
                            </FormControl>
                            <FormControl id="cpf">
                                <FormLabel textColor='black'>CPF</FormLabel>
                                <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('cpf', { required: true })} />
                            </FormControl>
                            <FormControl id="endereco">
                                <FormLabel textColor='black'>Endereço</FormLabel>
                                <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('endereco', { required: true })} />
                            </FormControl>
                            <FormControl id="telefone">
                                <FormLabel textColor='black'>Telefone</FormLabel>
                                <Input type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('telefone', { required: true })} />
                            </FormControl>
                            <FormControl id="mensalidade">
                                <FormLabel textColor='black'>Mensalidade</FormLabel>
                                <Input type="number" textColor='black' bg='white' borderColor='#d8dee4' {...register('mensalidade', { required: true })} />
                            </FormControl>

                            <Button mt={4} colorScheme='teal' type="submit" isLoading={isLoading}>
                                Cadastrar
                            </Button>
                            <Button mt={4} colorScheme='red' type="button" onClick={() => reset()}>
                                Limpar campos
                            </Button>
                        </Stack>
                    </form>
                </CardBody></Card></Stack>
        </Container>
    )
}

export default CreateUser