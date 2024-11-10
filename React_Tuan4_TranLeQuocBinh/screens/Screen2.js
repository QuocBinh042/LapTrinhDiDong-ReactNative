import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';

let usersArray = [];
export default function Screen2() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation();

    const handleSignUp = () => {
        usersArray.push({ username, email, password });
        navigation.navigate("Screen3",  { usersArray });
    };

    return (
        <View style={styles.container}>
            {/* Back Arrow Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            {/* Centered Logo */}
            <Image source={require('../assets/data/Image_19.png')} style={styles.logo} />

            <Text style={styles.title}>Nice to see you!</Text>
            <Text style={styles.subtitle}>Create your account</Text>

            {/* Username Input with Icon */}
            <View style={styles.inputContainer}>                
                <Icon name="user" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            {/* Email Input with Icon */}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* Password Input with Icon */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"                    
                    value={password}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={setPassword}
                    
                />
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

            {/* Checkbox for Terms & Conditions */}
            <View style={styles.checkboxContainer}>
                <Checkbox value={isChecked} onValueChange={setIsChecked} style={styles.checkbox} />
                <Text style={styles.checkboxLabel}>
                    I agree with <Text style={styles.terms}>Terms & Conditions</Text>
                </Text>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={!isChecked}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20, // Adjust the space below the logo
        alignSelf: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center', // Ensures the title is centered
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
        textAlign: 'center', // Ensures the subtitle is centered
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 14,
    },
    terms: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#00bfff',
        paddingVertical: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
