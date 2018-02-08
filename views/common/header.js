import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import LeftIcon from './left_icon.js';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.pop = this.pop.bind(this);
    }

    pop(){
        this.props.navigator.pop();
    }


    render() {
        var headerContent = this.props.initObj;
        return(
            <View style={styles.header}>
                <TouchableOpacity style={styles.leftBtn} onPress={this.pop}>
                    <LeftIcon/>
                    <Text style={styles.btnText}>{headerContent.backName}</Text>
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 44,
        backgroundColor: '#3497ff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    leftBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    btnText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 2,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 20,
        width: 200
    }
});