import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = (props) => {
    const [search, setSearch] = useState('');

    const _onsearch = () => {
        console.log('Search Text ----------> ',search);
        if(search.trim() !== '')
        {
        props.onClick(search)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchbarContainer}>
                <TextInput placeholder="Search GIPHY" onChangeText={setSearch}></TextInput>
                <Icon onPress={_onsearch} name="search" style={{alignSelf: 'center', marginRight: 10}} size={20} color="black" />
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