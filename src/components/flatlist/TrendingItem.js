import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

const {height, width} = Dimensions.get('window');

const TrendingItem = (props) => {
    console.log('Props -------->',props.width)
    return (
        <View style={{marginBottom: 10, marginRight: 5}}>
            <FastImage
            style={{ height: 120, width: parseInt(props.width) - 60 }}
            source={{
                uri: props.image
            }}
            resizeMode='stretch'
            />  
            <Text style={{textAlign: 'center', fontSize: 15, fontWeight: '700', margin: 5}}>{props.title.split(' ').slice(0,2).join(' ')}</Text>
   </View>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 10, 
        backgroundColor: '#4cafff'
    }
})


export default TrendingItem;


// https://g.tenor.com/v1/categories?type=featured //Featured Key