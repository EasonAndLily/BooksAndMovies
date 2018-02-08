import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navigation from './views/common/navigation.js';
import BookList from './views/book/book_list.js';


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'books'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'books'}
            title="Books"
            renderIcon={()=><Icon name="book" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="book" size={25} color="#4F8EF7"/>}
            onPress={() => this.setState({ selectedTab: 'books' })}>
            <Navigation component={BookList}>
            </Navigation>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'movies'}
            title="Movies"
            renderIcon={()=><Icon name="file-movie-o" size={25} color="#617984"/>}
            renderSelectedIcon={()=><Icon name="file-movie-o" size={25} color="#4F8EF7"/>}
            onPress={() => this.setState({ selectedTab: 'movies' })}>
            <View style={styles.movieTabPanel}>
                  <Text>Profile</Text>
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  bookTabPanel: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  movieTabPanel: {
    flex: 1,
    backgroundColor: 'blue'
  }
});
