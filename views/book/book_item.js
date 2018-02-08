import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class BookItem extends Component {
    render() {
        var book = this.props.book;
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: book.image}} style={styles.image}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                    <Text numberOfLines={1}>{book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.publishAuthor} numberOfLines={1}>{book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.publishAuthor}>{book.author}</Text>
                    </View>
                    <View style={styles.piceAndPagesContainer}>
                    <Text style={styles.price}>{book.price}</Text>
                    <Text style={styles.pages}>{book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 120,
        padding: 10,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 100,
    },
    contentContainer: {
        flex: 1,
        marginLeft: 15,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    publishAuthor: {
        color: "#A3A3A3",
        fontSize: 13,
    },
    piceAndPagesContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    price: {
        color: '#2BB2A3',
        fontSize: 16,
    },
    pages: {
        marginLeft: 10,
        color: "#A7A0A0",
    }
});