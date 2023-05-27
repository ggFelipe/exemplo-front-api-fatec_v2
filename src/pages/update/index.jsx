import {
    Container, Stack,
    FormControl, FormLabel,
    Input, Button
} from "@chakra-ui/react"

import { useForm } from 'react-hook-form'
import { useUpdateUser } from "../../hooks/mutationUser"
import { useParams } from 'react-router-dom';
import { useUser } from "../../hooks/useUsers";

const UpdateUser = () => {
    const { id } = useParams()

    const { user, isLoading } = useUser(id)

    const {
        register,
        handleSubmit
    } = useForm()

    const { mutate: mutateUpdateUser, isLoading: isLoadingUpdate, isError } = useUpdateUser()

    const onSubmit = (data) => {
        data.id = id
        mutateUpdateUser(data)
        if (!isError) {
            alert('Usuário atualizado com sucesso!')
        }
    }

    return (
        <Container>
            <h1>Cadastrar Usuário</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                {isLoading || !user ? <p>Carregando...</p> : <Stack>
                    <FormControl id="nome">
                        <FormLabel>Nome</FormLabel>
                        <Input defaultValue={user.nome} type="text" {...register('nome', { required: true })} />
                    </FormControl>
                    <FormControl id="cpf">
                        <FormLabel>CPF</FormLabel>
                        <Input defaultValue={user.cpf} type="text" {...register('cpf', { required: true })} />
                    </FormControl>
                    <FormControl id="endereco">
                        <FormLabel>Endereço</FormLabel>
                        <Input defaultValue={user.endereco} type="text" {...register('endereco', { required: true })} />
                    </FormControl>
                    <FormControl id="telefone">
                        <FormLabel>Telefone</FormLabel>
                        <Input defaultValue={user.telefone} type="text" {...register('telefone', { required: true })} />
                    </FormControl>

                    <Button mt={4} colorScheme='teal' type="submit" isLoading={isLoadingUpdate}>
                        Atualizar
                    </Button>
                </Stack>}
            </form>
        </Container>
    )
}

export default UpdateUser