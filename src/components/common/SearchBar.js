import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchbarContainer}>
                <TextInput placeholder="Search GIPHY"></TextInput>
                <Icon name="search" style={{alignSelf: 'center', marginRight: 10}} size={20} color="black" />
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 10, 
        backgroundColor: '#4cafff'
    },
    searchbarContainer : {
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        justifyContent: 'space-between'
    }
})


export default SearchBar;