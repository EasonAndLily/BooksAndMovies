import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class MovieItem extends Component {
    render() {
        let movie = this.props.movie;
        let actors = [];
        movie.casts.map((item) => {
            actors.push(item.name);
        });
        return(
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: movie.images.medium}} 
                      resizeMode="contain" style={styles.image}>
                    </Image>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>
                            名称：
                            {movie.title}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>
                            演员：
                            {actors}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>
                            评分：
                            {movie.rating.average}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>
                            时间：
                            {movie.year}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>
                            标签：
                            {movie.genres}
                        </Text>
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
        height: 120,
    },
    contentContainer: {
        flex: 1,
        marginLeft: 15,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#000',
    }
});

