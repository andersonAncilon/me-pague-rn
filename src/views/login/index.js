import React, { Component } from 'react'
import { View, KeyboardAvoidingView } from 'react-native';
import { StyleSheet } from 'react-native';

import BackgroundImage from '../../components/backgroundImage/bg';
import MyInput from '../../components/input/index';



export default class Login extends Component {
    render() {
        return (
            
            <BackgroundImage>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View>
                    <MyInput name='user' ph='Digite seu login' lb='Usuário'/>
                    <MyInput name='lock' ph='Digite sua senha' isPs={true} lb='Senha' />
                </View>
                </KeyboardAvoidingView>
            </BackgroundImage>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
    },
});


