import React from 'react'
import {View, Text,ScrollView} from 'react-native'
import Searchform from './Searchform'
import Footer from './Footer'
import Header from './Header'

const Search = ({navigation}) =>{
    return (
        <View>
            <Header/>
            <Searchform navigation={navigation}/>
            <Footer/>
        </View>
      )
}

export default Search