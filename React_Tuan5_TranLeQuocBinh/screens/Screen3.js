import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screen3({ navigation, route }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        if (route.params) {
            setEmail(route.params.email);
        }
    }, [route.params]);

    const handleLogin = () => {
        if (route.params && route.params.email === email && route.params.password === password) {
            navigation.navigate("Screen4");
        } else {
            alert("Invalid login credentials");
        }
    };


    return (
        <View style={styles.container}>
            {/* Image for background or logo */}
            <Image
                source={require('../assets/data/Image 20.png')}
                style={styles.backgroundImage}
            />

            <View style={styles.loginContainer}>
                <Text style={styles.title}>Welcome!</Text>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Icon name="envelope" size={20} color="gray" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Image
                        source={require('../assets/data/lock.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"
                        value={password}
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={setPassword}
                    />
                    {/* Password Visibility Toggle */}
                    <TouchableOpacity
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        style={styles.eyeIconContainer}
                    >
                        <Image
                            source={require('../assets/data/eye.png')}
                            style={styles.eyeIcon}
                        />
                    </TouchableOpacity>
                </View>

                {/* Login Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    backgroundImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    loginContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },
    eyeIconContainer: {
        padding: 5,
    },
    eyeIcon: {
        width: 20,
        height: 20,
    },
    button: {
        backgroundColor: '#00bfff',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});