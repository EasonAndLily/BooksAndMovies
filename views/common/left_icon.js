import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class LeftIcon extends Component {
    render() {
        return (
            <View>
                <View style={styles.go}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    go: {
        width: 15,
        height: 15,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#fff",
        transform: [{rotate: "45deg"}],
    }
});