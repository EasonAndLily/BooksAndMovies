import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Util from './../common/util.js';
import SearchBar from './../common/searchBar.js';
import Douban_APIS from './../common/service.js';
import Header from './../common/header.js';
import BookItem from './book_item.js';

export default class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookData: null
        }
    }

    getData() {
        let that = this;
        var url = Douban_APIS.bookDetail + this.props.bookId;
        Util.getRequest(url, function(data){
            that.setState({bookData: data});
        }, function(err) {
            alert(err);
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                {
                    this.state.bookData ?
                    <View>
                        <Header initObj={{backName: '图书', barTitle: this.state.bookData.title}}
                          navigator={this.props.navigator}/>
                        <BookItem book={this.state.bookData}/>
                        <View>
                            <Text style={styles.title}>
                                图书简介
                            </Text>
                            <Text style={styles.text}>
                                {this.state.bookData.summary}
                            </Text>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text style={styles.title}>作者简介</Text>
                            <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                        </View>
                        <View style={{height: 55}}>
                        </View>
                    </View> :
                    <View>
                    </View>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: '#000D22',
    }
});