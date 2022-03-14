import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import Searchresult from "./Searchresult"
import Footer from './Footer';
import HeaderAlt from './HeaderAlt';


const Hasilsearch = ({route, navigation}) =>{

  const { data } = route.params;

  return (
      <View>
        <HeaderAlt/>
        <Searchresult navigation={navigation} data = {data}/>
        <Footer/>
      </View>
    )
}

export default Hasilsearch