import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator
} from 'react-native';


let Util = {
    windowSize: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    getRequest: function(url, successCallBack, failCallBack) {
        let opts = {
            method: 'GET'
        };
        fetch(url, opts)
        .then((res) => res.json())
        .then((resData) => successCallBack(resData))
        .catch((err) => failCallBack(err));
    },
    loading: <ActivityIndicator style={{marginTop:200}}/>,
};

export default Util;
