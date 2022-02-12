import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TrendingItem from './TrendingItem';
import Heading from '../common/Heading';

const TrendingComponent = ({data}) => {

  return (
    <View>

          <View style={{ marginTop: 20 }}>
            <Heading title="Trending GIPHY" />
          </View>
          
          <FlatList
            style={{ marginLeft: 4 }}
            data={data}
            horizontal={true}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TrendingItem width={item.images.fixed_height.width}
                image={item.images.fixed_height.url}
                title={item.title}>
              </TrendingItem>
            )}
          />

    </View>      
  )
}

const styles = StyleSheet.create({
  flex: 1
})

export default TrendingComponent;