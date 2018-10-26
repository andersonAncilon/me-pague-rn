import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';

export default class BackgroundImage extends Component {

    render() {
        return (
            <ImageBackground source={require('./bg.jpg')} style={styles.backgroundImage}>  
                    {this.props.children}       
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
});