import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
const backImage = require('../assets/backImage.png');


export default function Signup({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const onHandleSignup = () => {
        if (email !== '' && password !== '') {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => console.log('Signup success'))
                .catch((err) => Alert.alert("Login error", err.message));
        }
      };


    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage} />
            <View style={styles.whiteSheet} />
            
            <SafeAreaView style={styles.form}>
                <Text style={styles.title} >Sign Up</Text>   
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter email'
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />


                <TouchableOpacity style={styles.button} onPress={onHandleSignup} >
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 22 }} >Sign Up</Text>
                </TouchableOpacity>


                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 16 }}>Do you have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 16}}> Log In</Text>
                    </TouchableOpacity>
                </View>

            
            </SafeAreaView>
            <StatusBar barStyle="light-content" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        color: '#f57c00',
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: "center",
        paddingBottom: 24,
    },
    input: {
        height: 60,
        backgroundColor: '#F6F7FB',
        color: '#000',
        marginBottom: 20,
        borderRadius: 10,
        paddingStart: 20
    },
    backImage: {
        height: 340,
        width: '100%', 
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
    },
    whiteSheet: {
        width:'100%', 
        height:'75%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 80,
        position: "absolute",
        bottom: 0,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: '#f57c00',
        padding: 20,
        alignItems: 'center',
        borderRadius: 20
    },
});