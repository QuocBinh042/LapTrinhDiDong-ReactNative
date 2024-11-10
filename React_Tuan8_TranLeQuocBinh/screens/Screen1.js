import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FaAngleRight, FaArrowRight, FaEnvelopeSquare } from 'react-icons/fa'
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const [name, setName] = useState(''); // State để lưu trữ tên
  const navigation = useNavigation();   // Để điều hướng

  const handleGetStarted = () => {
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    // Điều hướng sang Screen2 và truyền tên người dùng qua
    navigation.navigate('Screen2', { userName: name });
  };
  return (
    <ScrollView contentContainerStyle={{flex:1, flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
      <Image source={require('../assets/Data/Image95.png')}></Image>
      <View style={{alignItems:'center', marginTop:30 }}>
        <Text style={{fontSize:25, color:'purple', fontWeight:'bold'}}>MANAGE YOUR</Text>
        <Text style={{fontSize:25, color:'purple', fontWeight:'bold'}}>TASK</Text>
      </View>
      
      <View style={{borderRadius:10, paddingVertical:5,borderWidth:1, marginTop:20, width:'80%', flexDirection: 'row'}}>
        <FaEnvelopeSquare size={30} style={{ marginLeft: 10}} />
        <TextInput style={{ marginLeft: 10}} placeholder='Enter your name' value={name} onChangeText={setName}/>
      </View>      
      
      <TouchableOpacity onPress={handleGetStarted} style={{borderRadius:10, paddingVertical:5,alignItems:'center',width:'50%',marginTop:50, backgroundColor:"gray"}}>
        <Text>GET STARTED <FaArrowRight/></Text>          
      </TouchableOpacity>      
    </ScrollView>
  )
}

const styles = StyleSheet.create({})