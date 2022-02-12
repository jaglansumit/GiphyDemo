import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Heading = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{props.title}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 10, 
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: '900'
    }

})


export default Heading;