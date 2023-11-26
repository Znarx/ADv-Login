import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase.config";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onPressLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('Home');
            })
            .catch((error) => {
                console.error(error);
                alert('Invalid email or password. Please try again.');
            });
    }

    return (
        <ImageBackground
            source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/402/524/desktop-wallpaper-323346-solo-leveling-manhwa-phone-backgrounds-and-solo-leveling-iphone.jpg' }}
            style={styles.container}
        >
             
                <Text style={styles.headerText}>MANHWA</Text>
            <View style={styles.content}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={(val) => setEmail(val)}
                            value={email}
                            placeholder="Enter your email address"
                            keyboardType="email-address"
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={(val) => setPassword(val)}
                            value={password}
                            placeholder="Enter your password"
                            secureTextEntry={true}
                            style={styles.input}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    onPress={onPressLogin}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        
    },
    content: {
        paddingHorizontal: 16,
    },

headerText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
},
    
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#fff',
    },
    inputContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderBottomWidth: 1,
        marginBottom: 8,
        borderRadius: 8,
    },
    input: {
        flex: 1,
        height: 40,
        color: 'black',
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
