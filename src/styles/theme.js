import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },

    colors: {
        orange: {

            500: "#ff8c00",
            400: "#ED8936",
            300: "#F6AD55",
            200: "#FBD38D",
            100: "#FEEBC8",
            50: "#FFFAF0",

        },
    },
    fonts: {
        heading: "Roboto",
        body: 'Roboto'
    }
})

export default theme