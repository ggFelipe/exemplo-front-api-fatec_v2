import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MaterialIcons } from "@expo/vector-icons"

export default function Userdata() {
    const navegation = useNavigation();
    return (

        <View style={style.container}>

            <View style={style.view}> {/* Cabecario */}
                <TouchableOpacity style={style.btnback} onPress={()=>navegation.goBack()}>
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={24}
                        color={Colors.black}
                    />
                </TouchableOpacity>

                <Text>Profile</Text>
            </View> {/* Cabecario */}
            
            <ScrollView style={style.scrollview}>
                <TouchableOpacity>
                    
                </TouchableOpacity>
            </ScrollView>

        </View>

    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 22,
    },

    view: {
        marginHorizontal: 12,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    btnback: {
        position: 'absolute',
        left: 0,
    },

    scrollview: {
        alignItems: 'center',
        marginVertical: 22,
    }

})