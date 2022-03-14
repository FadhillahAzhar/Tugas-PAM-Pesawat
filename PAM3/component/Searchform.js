import React, { useState } from 'react'
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity } from "react-native"

const SearchForm = ({navigation}) => {
    const [text, onChangeText] = useState({
        asal: '',
        tujuan: '',
        tanggal: '',
    });

const handleText = (textInput) => {
    return (value) => {
        onChangeText({ ...text, [textInput]: value });
    }
}
    
    return (
        
        <View style={Style.container}>
            <View style={Style.label}>
                <Text style={Style.text}>Lokasi asal</Text>
                <View style={Style.field}>
                    <TextInput
                        style={Style.input}
                        placeholder="Masukkan Lokasi asal"
                        value={text.asal}
                        onChangeText={handleText('asal')}
                    />
                </View>
                <Text style={Style.text}>Lokasi Tujuan</Text>
                <View style={Style.field}>
                    <TextInput
                        style={Style.Input}
                        placeholder="Masukkan Lokasi Tujuan"
                        value={text.tujuan}
                        onChangeText={handleText('tujuan')}
                    />
                </View>
                <Text style={Style.text}>Tanggal asal</Text>
                <View style={Style.field}>
                    <TextInput
                        style={Style.input}
                        placeholder="Masukkan Tanggal asal"
                        value={text.tanggal}
                        onChangeText={handleText('tanggal')}
                        keyboardType="numeric"
                    />
                </View>
                <TouchableOpacity 
                    style={Style.button}
                    onPress={() => navigation.navigate('Hasilsearch', {data: text})}
                >
                    <Text style={Style.text2}>Cari</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 50,
        width: '80%',
        position: 'absolute',
        marginTop: "30%",
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },
    label:{
        marginTop: 20,
    },
    field:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2.1,
        borderRadius: 5,
        marginTop: 5,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    input:{
        padding:10,
        backgroundColor: '#fff',
        color: '#424242',
    },
    button:{
        marginTop: 20,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed7c31',
        borderRadius: 5,
    },

    text2:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        color: '#fff',
    },
})

export default SearchForm