import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

const {height, width} = Dimensions.get('window');

const GiphyListItem = (props) => {
    
    return (
        <View style={{ margin: 2 }}>
        <FastImage
            style={{ height: parseInt(props.height), width: width / 2 - 10, }}
            source={{
                uri: props.image,
                headers: { Authorization: 'token' },
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable,
            }}
            resizeMode='stretch'
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 10, 
        backgroundColor: '#4cafff'
    }
})


export default GiphyListItem;


// https://g.tenor.com/v1/categories?type=featured //Featured Key