import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  
  // const category =[
  //   {name:'Resort',image:require('./assets/data/resort.png')},
  //   {name:'Homestay',image:require('./assets/data/homestay.png')},
  //   {name:'Hotel',image:require('./assets/data/hotel.png')},
  //   {name:'Lodge',image:require('./assets/data/lodge.png')},
  //   {name:'Villa',image:require('./assets/data/villa.png')},
  //   {name:'Apartement',image:require('./assets/data/apartment.png')},
  //   {name:'Hostel',image:require('./assets/data/hostel.png')},
  //   {name:'Seeall',image:require('./assets/data/seeall.png')}
  // ]

  // const location = [
  //   {image:require('./assets/data/photo1.png')},
  //   {image:require('./assets/data/photo2.png')},
  //   {image:require('./assets/data/photo3.png')},
  //   {image:require('./assets/data/photo4.png')},
  //   {image:require('./assets/data/photo5.png')},
  //   {image:require('./assets/data/photo1.png')}
  // ]

  const [location, setLocation] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(()=>{
    fetch('https://6459b1fa95624ceb21edb15c.mockapi.io/api/ktTH/location')
    .then((res)=>res.json())
    .then((data)=>setLocation(data));
    fetch('https://6459b1fa95624ceb21edb15c.mockapi.io/api/ktTH/category')
    .then((res)=>res.json())
    .then((data)=>setCategory(data));
  },[])
  return (
    <ScrollView contentContainerStyle={styles.container}>     
      <View style={{backgroundColor:"#5C5BB3", width:'100%', padding:30}}>
        <View style={{flexDirection:'row'}}>
          <Image style={{width:30, height:30}} source={require('./assets/data/logoicon.png')}/>
          <View style={{padding:5, width:'80%', marginLeft:15, borderRadius:10, flexDirection:'row', backgroundColor:'white'}}>
            <TextInput style={{width:'100%'}} placeholder='Search here...'></TextInput>
            <FaSearch size={20} style={{alignSelf:'center'}}/>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:20}}>
          <View style={{flexDirection:'row'}}>
            <Image style={{borderRadius:100, width:40, height:40}} source={require('./assets/data/personicon.png')}/>
            <View style={{marginLeft:10, flexDirection:'column'}}>
              <Text style={{fontWeight:'500', color:'white'}}>Welcome!</Text>
              <Text style={{color:'white'}}>Donna Stroupe</Text>
            </View>            
          </View>
          <Image style={{ width:40, height:40, alignSelf:'center'}} source={require('./assets/data/ringicon.png')}/>
        </View>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', padding:30, width:'100%'}}>
        <Text style={{fontWeight:'500', fontSize:20}}>Category</Text>
        <Image style={{ width:25, height:25}} source={require('./assets/data/3gach.png')}/>
      </View>
      
      <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', paddingHorizontal:10}}>
        {category.map((item,index)=>(
          <View key={index} style={{width:'25%', alignItems:'center', marginTop:15}}>
            <Image style={{width:50, height:50}} source={item.image}/>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', padding:30, width:'100%'}}>
        <Text style={{fontWeight:'500', fontSize:20}}>Popular Destination</Text>
        <Image style={{ width:25, height:25}} source={require('./assets/data/3gach.png')}/>
      </View>
      
      <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', paddingHorizontal:10}}>
        {location.slice(0,3).map((item,index)=>(
          <View key={index} style={{width:'25%', alignItems:'center', marginTop:15}}>
            <Image style={{width:100, height:110, borderRadius:10}} source={item.image}/>
          </View>
        ))}
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:30, paddingLeft:30, width:'100%'}}>
        <Text style={{fontWeight:'500', fontSize:20}}>Recommended</Text>
      </View>
      
      <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', paddingHorizontal:10}}>
        {location.slice(3,5).map((item,index)=>(
          <View key={index} style={{width:'45%', alignItems:'center', marginTop:15}}>
            <Image style={{width:150, height:150, borderRadius:10}} source={item.image}/>
          </View>
        ))}
      </View>

        <View style={{flexDirection:'row', backgroundColor:"#5C5BB3", width:'100%', padding:30, justifyContent:'space-between'}}> 
          <View style={{alignItems:'center'}}>
            <Image style={{width:50, height:50}} source={require('./assets/data/homeicon.png')}/>
            <Text>Home</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Image style={{width:50, height:50}} source={require('./assets/data/exploreicon.png')}/>
            <Text>Explore</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Image style={{width:50, height:50}} source={require('./assets/data/searchicon.png')}/>
            <Text>Search</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Image style={{width:50, height:50}} source={require('./assets/data/profileicon.png')}/>
            <Text>Profile</Text>
          </View>
          
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
