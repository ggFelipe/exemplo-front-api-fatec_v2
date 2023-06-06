import {
    Container, Stack,
    FormControl, FormLabel,
    Input, Button, Card, CardBody, VStack,
    Heading
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
            <Stack spacing='4'>
            <VStack as='header' spacing='6' mt='8'>
                <Heading fontWeight="300" fontSize="24px" letterSpacing='-0.5px'>Atualizar informaçoes de usuários</Heading>
            </VStack>
            <Card variante='outline' borderColor='#d8dee4'><CardBody><Stack>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {isLoading || !user ? <p>Carregando...</p> : <Stack>
                        <FormControl id="nome">
                            <FormLabel>Nome</FormLabel>
                            <Input defaultValue={user.nome} type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('nome', { required: true })} />
                        </FormControl>
                        <FormControl id="cpf">
                            <FormLabel>CPF</FormLabel>
                            <Input defaultValue={user.cpf} type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('cpf', { required: true })} />
                        </FormControl>
                        <FormControl id="endereco">
                            <FormLabel>Endereço</FormLabel>
                            <Input defaultValue={user.endereco} type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('endereco', { required: true })} />
                        </FormControl>
                        <FormControl id="telefone">
                            <FormLabel>Telefone</FormLabel>
                            <Input defaultValue={user.telefone} type="text" textColor='black' bg='white' borderColor='#d8dee4' {...register('telefone', { required: true })} />
                        </FormControl>
                        <FormControl id="telefone">
                            <FormLabel>Mensalidade</FormLabel>
                            <Input defaultValue={user.mensalidade} type="number" textColor='black' bg='white' borderColor='#d8dee4' {...register('mensalidade', { required: true })} />
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

export default UpdateUser