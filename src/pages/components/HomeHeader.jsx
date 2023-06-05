import { Button, Flex, IconButton, Link, Switch, useColorMode, Image, Box, Grid } from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons"



const HomeHeader= () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

    return (
        <Flex
        bg="orange.500" 
        w="100%" 
        as="header" 
        mx="auto" 
        px="1rem" 
        align="center" 
        justify="center" 
        h={["50px", "100px"]}>

            <Grid 
            h="100%" 
            mx="auto" 
            w="100%" 
            maxW="1168px" 
            alignItems="center" 
            templateColumn="repeat(3, 1fr)" 
            justifyContent="flex" >

                <Link w="50px" href="/">
                <Image 
                w="50px" 
                justifySelf="left" 
                src="/atv.png" 
                gridColumn="1" />
                </Link>

                    <Flex 
                    gridColumn="3"
                    justifyContent="right" 
                    display={["none", "none", "flex", "flex"]}>

                    <Box my={6} gridColumn="3">
                        <SunIcon />
                        <Switch color="orange.50" isChecked={isDark} onChange={toggleColorMode} />
                        <MoonIcon />
                    </Box>
                            <Button
                            size="sm" 
                            variant="ghost" 
                            colorScheme="teal" 
                            aria-label="Home" 
                            my={5} 
                            w="auto">
                                <Link href="/">Home</Link>
                            </Button>
                        
                            <Button
                            size="sm" 
                            variant="ghost" 
                            colorScheme="teal" 
                            my={5} 
                            w="auto">
                                <Link href="/">Contact</Link>
                            </Button>

                            <Button
                            size="sm" 
                            variant="ghost" 
                            colorScheme="teal" 
                            my={5} 
                            w="auto">
                                <Link href="/sobre">About</Link>
                            </Button>

                    </Flex>
                    <IconButton 
                    gridColumn="3"
                    justifySelf="right"
                    w="50px"
                    aria-label="Open Menu" 
                    size="lg" 
                    mr={2} 
                    icon={<HamburgerIcon />} 
                    display={["flex", "flex", "none", "none"]} />

            </Grid>
        </Flex>
    )
}

export default HomeHeader