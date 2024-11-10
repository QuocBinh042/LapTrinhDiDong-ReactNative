import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screen1({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [users, setUsers] = useState([]); // lưu danh sách người dùng từ API

    useEffect(() => {
        fetch('http://localhost:4000/api/users')
          .then((res) => res.json())
          .then((data) => setUsers(data)) // lưu mảng người dùng vào `users`
          .catch((err) => console.error("Lỗi khi lấy danh mục:", err));
    }, []);

    console.log(" mang: ",users);
    const handleLogin = () => {
        const user = users.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            Alert.alert("Đăng nhập thành công!");
            navigation.navigate("Screen4");
        } else {
            setErrorMessage('Thông tin đăng nhập không chính xác!');
        }
    };

    return (
        <View style={styles.container}>
            {/* Nút back */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            {/* Logo */}
            <Image
                source={require('../assets/data/icon.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Hello Again!</Text>
            <Text style={styles.subtitle}>Login into your account</Text>

            {/* Input Username*/}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername} // cập nhật `username`
                />
            </View>

            {/* Input Password */}
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
            {/* Nút Quên mật khẩu */}
            <TouchableOpacity onPress={() => Alert.alert('Forgot Password clicked')} style={styles.forgotPasswordContainer}>
                <Text style={{ color: 'blue' }}>Forgot password?</Text>
            </TouchableOpacity>

            {/* Thông báo lỗi */}
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            {/* Nút Continue */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <Text>Or</Text>

            <View style={styles.iconRow}>
                <Image source={require('../assets/data/google.png')} style={styles.socialIcon} />
                <Image source={require('../assets/data/face.png')} style={styles.socialIcon} />
                <Image source={require('../assets/data/apple.png')} style={styles.socialIcon} />
            </View>

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
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },
    error: {
        color: 'red',
        marginBottom: 15,
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
    forgotPasswordContainer: {
        width: '100%', // Để đảm bảo rằng nó chiếm đủ chiều rộng của container
        alignItems: 'flex-end', // Đưa phần tử con Text về bên phải
        marginBottom: 20, // Khoảng cách phía dưới
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    socialIcon: {
        marginHorizontal: 10,
    },

});
