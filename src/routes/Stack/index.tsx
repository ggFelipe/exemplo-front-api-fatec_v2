import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../../pages/Welcome";
import Login from "../../pages/Login";
import Userdata from "../../pages/Userdata";

const { Navigator, Screen } = createNativeStackNavigator()

export default function() {
    return(
        <Navigator initialRouteName="Welcome">
            <Screen name="Welcome" component={Welcome} options={{ headerShown: false}} />
            <Screen name="Login" component={Login} options={{ headerShown: false}} />
            <Screen name="Userdata" component={Userdata} options={{ headerShown: false}} />
        </Navigator>
    )
}