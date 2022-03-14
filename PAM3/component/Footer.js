import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"

const Footer = () => {
    return (
        <View style={Style.footer}>
            <Text>Copyright Fadhillah Azhar Alsani - 119140217</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    footer:{
        justifyContent: 'center',
        alignItems: 'center',
        top:'40%',
    },
})

export default Footer