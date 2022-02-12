import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Heading from '../common/Heading';
import GiphyListItem from './GiphyListItem';

const GiphyListComponent = ({data, title, is_search, _clearSearch}) => {

  return (
    <View>

          <View style={{ marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Heading title={title} />
           {is_search ?  <Text style={{color: 'red', alignSelf: 'center', marginRight: 20}} onPress={_clearSearch}>Reset</Text> : null }
          </View>
          
          <FlatList
            style={{ alignSelf: 'center', marginBottom: 20 }}
            data={data}
            numColumns={2}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <GiphyListItem
                height={item.images.fixed_width.height}
                image={item.images.fixed_width.url}>
              </GiphyListItem>
            )}
          />

    </View>      
  )
}

const styles = StyleSheet.create({
  flex: 1
})

export default GiphyListComponent;