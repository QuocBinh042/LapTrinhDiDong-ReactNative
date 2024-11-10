import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FaAngleRight, FaSearch } from 'react-icons/fa'
import { Image } from 'react-native'
import { FaAngleLeft, FaArrowLeft } from 'react-icons/fa6'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Screen2() {
  const route = useRoute();
  const navigation = useNavigation();
  const handle = () =>{
    navigation.navigate('Screen3');
  }
  const { userName } = route.params;
  const data = [
    {id:1, action:'To check email'},
    {id:2, action:'UI task web page'},
    {id:3, action:'Learn javascript basic'},
    {id:4, action:'Learn HTML Advance'},
    {id:5, action:'Medical App UI'},
    {id:6, action:'Learn Java'}
  ]      
  return (
    <ScrollView contentContainerStyle={{flex:1, justifyContent:'center'}}>
        <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
            <FaArrowLeft/>
            <View style={{flexDirection:'row', }}>
                <Image source={require('../assets/Data/Avatar31.png')}/>
                <View style={{alignItems:'center', marginLeft:10}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Hi {userName}</Text> 
                    <Text>Have agrate day a head</Text>
                </View>
            </View>
        </View>

        <View style={{marginLeft:15,flexDirection: 'row', borderWidth:1, borderRadius:10, width:'90%', marginTop:20}}>
            <FaSearch size={15} style={{padding:10}}/>
            <TextInput style={{padding:5, justifyContent:'center'}} placeholder='Search'/>
        </View>

        <View>
          {data.map(( item,id)=>
            <View style={{justifyContent:'space-between', padding:10, marginLeft:15,flexDirection: 'row', backgroundColor:'gray', borderRadius:20, width:'90%', marginTop:20}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{marginRight:10}} source={require('../assets/Data/mdi_marker-tick.png')}/>
                    <Text key={id}>{item.action}</Text>
                </View>                
                <Image style={{tintColor:'red'}} source={require('../assets/Data/iconamoon_edit-bold.png')}/>
            </View>
          )}
        </View>

        <TouchableOpacity onPress={handle} style={{display:'flex', alignItems:'center', marginTop:20}}>
          <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'blue', borderRadius:100, width:40, height:40}}>
            <Text style={{color:'white'}}>+</Text>
          </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})