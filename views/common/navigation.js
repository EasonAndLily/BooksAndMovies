import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

export default class Navigation extends Component {
    render() {
        var rootRoute = {
            component: this.props.component,
            passProps: {

            }
        };
        return(
            <Navigator initialRoute={rootRoute}
             configureScene={() => {
                return Navigator.SceneConfigs.PushFromRight;
             }}
             renderScene={(route, navigator) => {
                let ComponentTemp = route.component;
                return (
                    <View style={{flex:1}}>
                        <ComponentTemp navigator={navigator}
                        route={route} {...route.passProps}/>
                    </View>
                );
             }}>
            </Navigator>
        );
    }
}