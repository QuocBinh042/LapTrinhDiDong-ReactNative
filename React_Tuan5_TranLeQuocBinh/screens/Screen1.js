import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { ScrollView } from 'react-native-web'

export default function App({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View >
                    <Image source={require('../assets/data/Container_17.png')} />
                </View>
                <View style={{
                    marginTop: 15,
                    width: '85%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }} >
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold'
                    }} >Boost Productivity</Text>
                    <Text style={{
                        marginTop: 10,
                        color: 'gray'
                    }}>Simplify tasks, boost Productivity</Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 15,
                            backgroundColor: 'blue',
                            borderRadius: 10,
                            width: '100%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 140
                        }}
                        onPress={() => { navigation.navigate("Screen2") }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 140
                        }}
                        onPress={() => { navigation.navigate("Screen3") }}>
                        <Text style={{ fontSize: 20, color: 'black' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})