import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue, Button
} from '@chakra-ui/react';

export default function Smallfooter() {
    return (

<footer
            padding-bottom= '100px'
            width= '100%'
            height= '100px'
            position= 'absolute'
            bottom= '0'
            left= '0'
            >
        <Box
            spacing={4}
            mt='50'
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Stack direction={'row'} spacing={6}>
                        <Link href={'#'}>Home</Link>
                        <Link href={'#'}>About</Link>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Contact</Link>
                    </Stack>
                    <Text>© 2023 Ativa Fitness. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <Button label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </Button>
                        <Button label={'YouTube'} href={'#'}>
                            <FaFacebook />
                        </Button>
                        <Button label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </Button>
                    </Stack>
                </Container>
            
        </Box>
        </footer>

    );
}