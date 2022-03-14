import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"

const HeaderAlt = () => {
    return (
        <View style={Style.banner}>
            <Text style={Style.BannerText}>Hiling.id</Text>
            <View style={Style.text}>   
                <Text style={Style.textHasil}>Hasil Pencarian</Text>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    banner: {
        backgroundColor: '#86b257',
        height: 150,
        
    },
    text:{
        alignItems: 'center'
    }, 
    BannerText: {
        marginTop: 30,
        fontSize: 35,
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textHasil:{
        fontSize: 15,
        fontWeight:'bold',
        color: "white",
    },
    menuIcon: {
        marginTop: 25,
        fontSize: 40,
        marginLeft:20,
        
    },
    userIcon: {
        marginTop: 25,
        fontSize: 40,
        marginRight:20,
    },
})

export default HeaderAlt