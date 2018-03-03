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
import MovieItem from './movie_item.js';
import MovieWebView from './../common/custom_web_view.js';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            dataSource: ds,
            show: false,
            keywords: "加勒比海盗"
        };
        this.renderRow = this.renderRow.bind(this);
    }

    showDetail(title, url) {
        let detailRoute = {
            component: MovieWebView,
            passProps: {
                backName: "电影",
                title: title,
                url: url
            }
        };

        this.props.navigator.push(detailRoute);
    }

    getData() {
        this.setState({show: false});
        let that = this;
        let url = Douban_APIS.movieSearch + "?count=20&q=" + this.state.keywords;
        Util.getRequest(url, function(data){
            if(data.count == 0) {
                return alert("No this movie!");
            } 
            let ds = new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            });
            that.setState({
                show: true,
                dataSource: ds.cloneWithRows(data.subjects)
            });
        }, function(err){
            alert(err);
        });
    }

    componentDidMount() {
        this.getData();
    }

    renderRow(movie) {
        return <MovieItem movie={movie} onPress={this.showDetail.bind(this, movie.title, movie.alt)}/>;
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

    render() {
        return (
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

const styles = StyleSheet.create({

});