import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  // const category = [
  //   {name:'Resort',image:require('./assets/data/resort.png')},
  //   {name:'Homestay',image:require('./assets/data/homestay.png')},
  //   {name:'Hotel',image:require('./assets/data/hotel.png')},
  //   {name:'Lodge',image:require('./assets/data/lodge.png')},
  //   {name:'Villa',image:require('./assets/data/villa.png')},    
  //   {name:'Apartment',image:require('./assets/data/apartment.png')},
  //   {name:'Hostel',image:require('./assets/data/hostel.png')},
  //   {name:'See all',image:require('./assets/data/seeall.png')}
  // ]

  // const location = [
  //   {image: require('./assets/data/photo1.png')},
  //   {image: require('./assets/data/photo2.png')},
  //   {image: require('./assets/data/photo3.png')},
  //   {image: require('./assets/data/photo4.png')},
  //   {image: require('./assets/data/photo5.png')},
  //   {image: require('./assets/data/photo2.png')}
  // ]

  const [location, setLocation] = useState([]);
  const [category, setCategory] = useState([]);

  // Fetch dữ liệu từ API khi component mount
  useEffect(() => {
    fetch('https://6459b1fa95624ceb21edb15c.mockapi.io/api/ktTH/category')
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error('Error fetching category data:', error));

    fetch('https://6459b1fa95624ceb21edb15c.mockapi.io/api/ktTH/location')
      .then((response) => response.json())
      .then((data) => setLocation(data))
      .catch((error) => console.error('Error fetching location data:', error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>    
        <View style={{padding:30,backgroundColor:'#5C5BB3', width:'100%'}}>          
          <View style={{ flexDirection:'row', width:'100%', marginBottom:20}}>
            <Image style={{width:30, height:30}} source={require('./assets/data/logoicon.png')}/>
            <View style={{padding:5, alignItems:'center', marginLeft:10, flexDirection:'row', borderRadius:10, backgroundColor:'white', width:'87%',}}>
              <TextInput style={{width:'100%'}} placeholder='Search here...'></TextInput>
              <FaSearch size={15}/>
            </View>
          </View>       
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
              <Image style={{width:40, height:40, borderRadius:100}} source={require('./assets/data/personicon.png')}/>
              <View style={{flexDirection:'column', marginLeft:10}}>
                <Text style={{fontWeight:'bold', color:'white'}}>Welcome!</Text>
                <Text style={{color:'white', fontSize:12}}>Donna Stroupe</Text>
              </View>
            </View>              
            <Image style={{width:40, height:40}} source={require('./assets/data/ringicon.png')}/>
          </View>
        </View>  
        <View>
          <View style={{padding:30, flexDirection:'row', justifyContent:'space-between'}}>
            <Text>Category</Text>
            <Image style={{width:20, height:20}} source={require("./assets/data/3gach.png")}/>
          </View>  
          <View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between', marginHorizontal:10}}>
            {category.map((item,index)=>(
              <View key={index} style={{alignItems:'center', marginTop:20, flexDirection:'column', justifyContent:'center', width:'25%'}}>
                <Image style={{borderRadius:100, width:40, height:40}} source={item.image}/>
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>          
        </View>  
        <View>
          <View style={{padding:30, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontWeight:'500'}}>Popular Destination</Text>
            <Image style={{width:20, height:20}} source={require("./assets/data/3gach.png")}/>
          </View>  
          <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', marginHorizontal:20}}>
            {location.slice(0,3).map((item, index)=>(
              <View key={index} style={{width:'30%'}} >
                <Image style={{borderRadius:15, width:100, height:100}} source={item.image}/>
              </View>
            ))}
          </View>
        </View>  
        <View>
          <View style={{padding:30, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontWeight:'500'}}>Popular Destination</Text>
          </View>  
          <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', marginHorizontal:20}}>
            {location.slice(3,5).map((item, index)=>(
              <View key={index} style={{width:'45%', marginHorizontal:5}} >
                <Image style={{borderRadius:10, width:150, height:150}} source={item.image}/>
              </View>
            ))}
          </View>
        </View>  
        <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#5958b2', padding: 20,}}>
                   <TouchableOpacity style={{alignItems: 'center'}}>
                       <Image source={require('./assets/data/homeicon.png')} style={{width: 40, height: 40}}/>
                       <Text style={{color: '#fff', fontSize: 14, marginTop: 4}}>Home</Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={{alignItems: 'center'}}>
                       <Image source={require('./assets/data/exploreicon.png')} style={{width: 40, height: 40}}/>
                       <Text style={{color: '#fff', fontSize: 14, marginTop: 4}}>Explore</Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={{alignItems: 'center'}}>
                       <Image source={require('./assets/data/searchicon.png')} style={{width: 40, height: 40}}/>
                       <Text style={{color: '#fff', fontSize: 14, marginTop: 4}}>Search</Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={{alignItems: 'center'}}>
                       <Image source={require('./assets/data/profileicon.png')} style={{width: 40, height: 40}}/>
                       <Text style={{color: '#fff', fontSize: 14, marginTop: 4}}>Profile</Text>
                   </TouchableOpacity>
                </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
