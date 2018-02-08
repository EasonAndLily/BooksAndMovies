import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    ScrollView
} from 'react-native';

import Util from './../common/util.js';
import SearchBar from './../common/searchBar.js';
import Douban_APIS from './../common/service.js';
import BookItem from './book_item.js';
import BookDetail from './book_detail.js';

export default class BookList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            dataSource: ds,
            show: false,
            keywords: "react"
        };
        this.getData = this.getData.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    getData() {
        this.setState({show: false});
        let that = this;
        let url = Douban_APIS.bookSearch + "?count=20&q=" + this.state.keywords;
        Util.getRequest(url, function(data){
            if(data.count == 0) {
                return alert("No this books!");
            } 
            let ds = new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            });
            that.setState({
                show: true,
                dataSource: ds.cloneWithRows(data.books)
            });
        }, function(err){
            alert(err);
        });
    }

    componentDidMount() {
        this.getData();
    }

    renderRow(book) {
        return <BookItem book={book} onPress={this.showDetail.bind(this, book.id)}/>;
    }

    changeText(text) {
        this.setState({
            keywords: text
        });
    }

    searchPress() {
        this.getData();
    }

    renderSeparator(sectionID:number, rowID:number) {
        let style = {
            height: 1,
            backgroundColor: '#CCC',
        };
        return <View style={style} key={sectionID + rowID}/>;
    }

    showDetail(bookId) {
        var detailRoot = {
            component: BookDetail,
            passProps: {
                bookId: bookId
            }
        }
        this.props.navigator.push(detailRoot);
    }
    render() {
        return(
            <ScrollView>
                <SearchBar placeHolder='Enter book name' onPress={this.searchPress.bind(this)} 
                  onChangeText={this.changeText.bind(this)}/>
                {
                    this.state.show ? 
                    <ListView dataSource={this.state.dataSource}
                      initialListSize={10}
                      renderRow={this.renderRow}
                      renderSeparator={this.renderSeparator}/> :
                    Util.loading
                }
            </ScrollView>
        );
    }
}