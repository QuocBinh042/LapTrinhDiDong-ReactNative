// screens/Screen2.js
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, CheckBox } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

// Mảng toàn cục để lưu trữ thông tin người dùng
const usersArray = [];

export default function Screen2() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const navigation = useNavigation();

    const handleSignUp = () => {
        // Thêm thông tin người dùng vào mảng
        usersArray.push({
            username,
            email,
            password
        });
        navigation.navigate("Screen3", { email, password });
    };

    return (
        <View style={styles.container}>
            {/* Back Arrow Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            {/* Image placeholder for the logo */}
            <Image
                source={require('../assets/data/Image_19.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Nice to see you!</Text>
            <Text style={styles.subtitle}>Create your account</Text>

            {/* Username Input */}
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/data/codicon_account.png')}
                    style={styles.icon}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your user name"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            {/* Email Input */}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={setEmail}
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
                    placeholder="Enter your password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
            </View>

            {/* Checkbox for Terms & Conditions */}
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>
                    I agree with <Text style={styles.terms}>Terms & Conditions</Text>
                </Text>
            </View>

            {/* Continue Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
                disabled={!isChecked}
            >
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
    backIcon: {
        width: 24,
        height: 24,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
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
