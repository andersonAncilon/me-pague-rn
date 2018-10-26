import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { style } from './style';

export default class MyInput extends Component {

    handleClick = () => {
        this.props.handleClick();
    }

    render() {
        return (
            <Input
                placeholder={this.props.ph}
                leftIcon={{ type: 'font-awesome', name: `${this.props.name}` }}
                //onChange={this.handleClick}
                label={this.props.lb}
                secureTextEntry={this.props.isPs ? this.props.isPs : false}
                inputContainerStyle={style.myInput}
                underlineColorAndroid='transparent'
                labelStyle={style.myLabel}
            />
        )
    }
}