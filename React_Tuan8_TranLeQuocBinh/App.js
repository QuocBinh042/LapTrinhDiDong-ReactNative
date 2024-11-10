import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { FaAlignJustify, FaSearch } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

export default function App() {
  // const animal = [
  //   { name: "Golden Retriever", gender: "Male", yob: "2 years", location: "USA", image: require("./assets/Data/1GoldenRetriever.png") },
  //   { name: "Persian Cat", gender: "Female", yob: "3 years", location: "Iran", image: require("./assets/Data/2PersianCat.png") },
  //   { name: "Bulldog", gender: "Male", yob: "3 years", location: "UK", image: require("./assets/Data/3Bulldog.png") },
  //   { name: "Siamese Cat", gender: "Female", yob: "2 years", location: "Thailand", image: require("./assets/Data/4SiameseCat.png") },
  //   { name: "Beagle", gender: "Male", yob: "1 years", location: "USA", image: require("./assets/Data/5beagle.png") },
  //   { name: "Maine Coon", gender: "Female", yob: "1 years", location: "USA", image: require("./assets/Data/6MaineCoon.png") }
  // ];
  
  // const animaltype = [
  //   { animaltype: "Dog", image: require("./assets/Data/1GoldenRetriever.png")},
  //   { animaltype: "Cat", image:require("./assets/Data/2PersianCat.png")},
  //   { animaltype: "Bird", image: require("./assets/Data/5beagle.png")},
  //   { animaltype: "Fish", image: require("./assets/Data/2PersianCat.png")},
  //   { animaltype: "Mammal", image: require("./assets/Data/1GoldenRetriever.png")},
  //   { animaltype: "Insect", image: require("./assets/Data/1GoldenRetriever.png")}
  // ];  
  
  const [animal, setAnimal] = useState([]);
  const [animaltype, setAnimaltype] = useState([]);

  // Fetch dữ liệu từ API khi component mount
  useEffect(() => {
    fetch('https://6459b1fa95624ceb21edb15c.mockapi.io/api/ktTH/animal') // Thay URL API động vật của bạn
      .then((response) => response.json())
      .then((data) => setAnimal(data))
      .catch((error) => console.error('Error fetching animal data:', error));

    fetch('https://6459b1fa95624ceb21edb15c.mockapi.io/api/ktTH/animaltype') // Thay URL API loại động vật của bạn
      .then((response) => response.json())
      .then((data) => setAnimaltype(data))
      .catch((error) => console.error('Error fetching animaltype data:', error));
  }, []);

  
  return (
    <ScrollView contentContainerStyle={{flex:1, marginTop:20, flexDirection:'column'}}>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View style={{height:45, width: 45, borderRadius:100, borderWidth:1, justifyContent:'center', alignItems:'center'}}>
          <FaAlignJustify size={20}/>
        </View>   
        <View style={{flexDirection:'row'}}>
          <Image style={{width:50, height:50}} source={require('./assets/Data/images.png')}/>
          <Text style={{fontWeight:'800', fontSize:25, alignSelf:'center'}}>PET ADOPTION</Text>          
        </View>        
      </View>
      <View style={{flexDirection:'row', borderWidth:1, padding:10, width:'90%', marginLeft:20, borderRadius:10, marginTop:20}}>
          <FaSearch/>
          <TextInput style={{marginLeft:10}} placeholder='Search for pet'/>
      </View>
      <View style={{marginTop:30, alignItems:'center', display: 'flex', position: 'relative'}}>
        <Image style={{width:'90%',height:100}} source={require('./assets/Data/banner.png')}/>
        <View style={{backgroundColor:'silver', borderRadius:10, padding:7}}>
          <Text>Adopt now</Text>
        </View>
      </View>
      
      <View style={{marginTop:10, flexDirection:'row', justifyContent:'center'}}>
        <View style={{borderRadius:100, width:10, height:10, backgroundColor:'silver'}}> </View>
        <View style={{marginLeft:5, borderRadius:100, width:10, height:10, backgroundColor:'gray'}}> </View>
        <View style={{marginLeft:5, borderRadius:100, width:10, height:10, backgroundColor:'silver'}}> </View>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginTop:20}}>
        <Text style={{fontWeight:'bold'}}>Categories</Text>
        <Text style={{fontWeight:'bold'}}>Show All</Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginTop:20}}>
        {animaltype.slice(0,3).map((item,index)=>(
          <View key={index}>
            <Image source={item.image} style={{ width: 80, height: 80 }}/>
            <Text style={{alignSelf:'center'}}>{item.animaltype}</Text>
          </View>
        ))}
      </View>

      <View style={{flexDirection:'row', flexWrap: 'wrap',justifyContent:'space-between', marginHorizontal:10, marginTop:20}}>

        {animal.map((item,index)=>(
          <View key={index} style={{ width: '48%', marginBottom: 20, alignItems: 'center' }}>
            <Image source={item.image} style={{ width: 120, height: 120, }}/>
            <Text>{item.name}</Text>
            <Text>{item.gender},{item.yob}</Text>
            <Text> <FaLocationPin/> {item.location}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
    
  )
}

const styles = StyleSheet.create({})