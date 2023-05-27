import {
    Container, Stack,
    FormControl, FormLabel,
    Input,Button
} from "@chakra-ui/react"

import {useForm} from 'react-hook-form'
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
        if(!isError){
            reset()
            alert('Usuário cadastrado com sucesso!')
        }
    }

    return (
        <Container>
            <h1>Cadastrar Usuário</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl id="nome">
                    <FormLabel>Nome</FormLabel>
                    <Input type="text" {...register('nome', { required: true })}/>
                </FormControl>
                <FormControl id="cpf">
                    <FormLabel>CPF</FormLabel>
                    <Input type="text" {...register('cpf', { required: true })}/>
                </FormControl>
                <FormControl id="endereco">
                    <FormLabel>Endereço</FormLabel>
                    <Input type="text" {...register('endereco', { required: true })}/>
                </FormControl>
                <FormControl id="telefone">
                    <FormLabel>Telefone</FormLabel>
                    <Input type="text" {...register('telefone', { required: true })}/>
                </FormControl>
                <FormControl id="mensalidade">
                    <FormLabel>Mensalidade</FormLabel>
                    <Input type="number" {...register('mensalidade', { required: true })}/>
                </FormControl>

                <Button mt={4} colorScheme='teal' type="submit" isLoading={isLoading}>
                    Cadastrar
                </Button>
                <Button mt={4} colorScheme='red' type="button" onClick={() => reset()}>
                    Limpar campos
                </Button>                
            </Stack>
            </form>
        </Container>
    )
}

export default CreateUser