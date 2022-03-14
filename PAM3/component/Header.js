import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"

const Header = () => {
    return (
        <View style={Style.menu}>
            
            <Text style={Style.text}>Hiling.id</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    menu: {
        backgroundColor: '#86b257',
        height: 400,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15
    },
    text: {
        marginTop: 50,
        fontSize: 35,
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default Header