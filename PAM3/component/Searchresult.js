import React from 'react'
import { View, Text, StyleSheet, Colors} from "react-native"
import { Maskapai, Jadwal, Bandara } from './db/Database'

const Searchresult = ({data}) => {
    let available = true

    var listJadwal = () => {

        var newJadwal = Jadwal.filter( (x) => {
            let checkAsal = Bandara.filter( (x) => {
                return x.nama_bandara.toLowerCase() == data.asal.toLowerCase()
            })

            let checkTujuan = Bandara.filter( (x) => {
                return x.nama_bandara.toLowerCase() == data.tujuan.toLowerCase()
            })

            try{
                return (
                    x.asal.toLowerCase() == checkAsal[0].kode_bandara.toLowerCase() &&
                    x.tujuan.toLowerCase() == checkTujuan[0].kode_bandara.toLowerCase()
                )
            }
            catch(err){
                return available = false
            }
            

        })

        if(newJadwal.length>0){
            return newJadwal.map( (printJadwal, i ) => {

                let checkMaskapai = Maskapai.filter( (x) => {
                    return x.id_maskapai == printJadwal.id_maskapai
                })
    
                if(available == true){
                    return(
                        <View style={Style.container} key={i}>
                            <View style={Style.upperText}>
                                <Text>{newJadwal.length}</Text>
                                <Text style={Style.text}>{data.asal}</Text>
                                <Text style={Style.text}> - </Text>
                                <Text style={Style.text}>{data.tujuan}</Text>
                            </View>
                            
                            <View>
                                <View style={Style.lowerText}>
                                    <Text style={Style.text}>{checkMaskapai[0].nama_maskapai}</Text>
                                    <Text style={Style.date}>{data.tanggal}</Text>
                                </View>
                            </View>
                            
                        </View>
                    )
                }
            })
        }else{
            return(
                <View style={Style.container}>
                    <Text style={Style.ErrorText}>Hasil Pencarian Tidak Ditemukan</Text>
                </View>
            )
        }

        
    }

    return(
        <View>
            {listJadwal()}
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 30,
        width: '80%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
        marginTop: 10,
    },
    upperText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    lowerText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    text:{
        fontWeight: 'bold',
    },
    date:{
        fontWeight: 'bold',
        color: 'blue',
    },
    ErrorText:{
        textAlign: 'center'
    }
})

export default Searchresult