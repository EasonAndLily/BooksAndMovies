import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import Header from './header.js';

export default CustomWebView extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <Header navigator={this.props.navigator} 
                  initObj={{backName: this.props.backName, barTitle: this.props.title}}>
                </Header>
                <WebView startInLoadingState={true} contentInset={{top: -44, bottom: -120}}
                  source={{url: this.props.url}}>
                </WebView>
            </View>
        );
    }
}