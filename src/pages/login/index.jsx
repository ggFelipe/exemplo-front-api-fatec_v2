import { useUsers } from "../../hooks/useUsers"
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import { useUser } from "../../hooks/useUsers";
import {
    Box, Button, Card, CardBody, Center, FormLabel,
    HStack, Heading, Input,
    Stack, VStack, FormControl
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const Login = () => {


    return (
        <Box>
            <Center>
                <Stack spacing='4'>
                    <VStack as='header' spacing='6' mt='8'>
                        <Heading as="login" fontWeight="300" fontSize="24px" letterSpacing='-0.5px'>Login</Heading>
                    </VStack>
                    <Card bg='#f6f8fa' variante='outline' borderColor='#d8dee4' maxW='308px'>
                        <CardBody>
                            <form>
                                <Stack>
                                    <FormControl>
                                        <FormLabel textColor='black' size='sm'>Usuario</FormLabel>
                                        <Input id="user" type="text" textColor='black' bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' />
                                    </FormControl>
                                    <FormControl>
                                        <HStack justify="space-between">
                                            <FormLabel textColor='black' size='sm'>Senha</FormLabel>
                                            <Button href="#" variant='link' size='sx' color='#0969da' fontWeight='500'>Esqueceu a senha?</Button>
                                        </HStack>
                                        <Input textColor='black' id="senha" type="text" bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' />
                                    </FormControl>
                                    <Button bg='#2da44e' color='white' size='sm' _hover={{ bg: '#2c974b' }} _active={{ bg: '#298e46' }}><Link to='/userl'>Logar</Link></Button>
                                </Stack>
                            </form>
                        </CardBody>
                    </Card>
                    <Card variant="outline" borderColor='#d0d7de'>
                        <CardBody>
                            <Center>
                                <HStack fontSize='sm' spacing='1'>
                                    <Text>Não tem Login?</Text>
                                    <Link isExternal color="#0969da" hrefLang="#">Crie o seu.</Link>
                                </HStack>
                            </Center>
                        </CardBody>
                    </Card>
                </Stack>
            </Center>
        </Box>
    );


}

export default Login