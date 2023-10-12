import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import Stack from "./Stack"
import { StatusBar } from 'react-native';

export default function() {
    return(
        <NavigationContainer>
            <StatusBar backgroundColor="#ff8c00" barStyle="light-content"/>
            <Stack/>
        </NavigationContainer>
    )
}