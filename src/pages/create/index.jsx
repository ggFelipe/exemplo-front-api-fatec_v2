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
                    <Heading fontWeight="300" fontSize="18px" letterSpacing='-0.5px'>Cadastrar Usuário</Heading>
                </VStack>
                <Card  variante='outline' ><CardBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack>
                            <FormControl id="nome">
                                <FormLabel >Nome</FormLabel>
                                <Input type="text" textColor='black' bg='white' size='sm' borderColor='#d8dee4' {...register('nome', { required: true })} />
                            </FormControl>
                            <FormControl id="cpf">
                                <FormLabel >CPF</FormLabel>
                                <Input type="text" textColor='black' bg='white' size='sm' borderColor='#d8dee4' {...register('cpf', { required: true })} />
                            </FormControl>
                            <FormControl id="endereco">
                                <FormLabel >Endereço</FormLabel>
                                <Input type="text" textColor='black' bg='white' size='sm' borderColor='#d8dee4' {...register('endereco', { required: true })} />
                            </FormControl>
                            <FormControl id="telefone">
                                <FormLabel >Telefone</FormLabel>
                                <Input type="text" textColor='black' bg='white' size='sm' borderColor='#d8dee4' {...register('telefone', { required: true })} />
                            </FormControl>
                            <FormControl id="mensalidade">
                                <FormLabel >Mensalidade</FormLabel>
                                <Input type="number" textColor='black' bg='white' size='sm' borderColor='#d8dee4' {...register('mensalidade', { required: true })} />
                            </FormControl>

                            <Button mt={4} bg='#2da44e' color='white' size='sm' _hover={{ bg: '#2c974b' }} _active={{ bg: '#298e46' }} type="submit" isLoading={isLoading}>
                                Cadastrar
                            </Button>
                            <Button mt={4} colorScheme='red' size='sm' type="button" onClick={() => reset()}>
                                Limpar campos
                            </Button>
                        </Stack>
                    </form>
                </CardBody></Card></Stack>
        </Container>
    )
}

export default CreateUser