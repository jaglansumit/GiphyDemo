import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Heading from '../components/common/Heading';
import SearchBar from '../components/common/SearchBar';
import TrendingItem from '../components/flatlist/TrendingItem';
import GiphyListItem from '../components/flatlist/GiphyListItem';
import SearchListItem from '../components/flatlist/SearchListItem';
import FastImage from 'react-native-fast-image';
import axios from 'axios';

const { height, width } = Dimensions.get('window');

const Home = () => {
  const [trending, setTrending] = useState([])
  const [otherGifs, setOtherGifs] = useState([])
  const [rawData, setRawData] = useState([])
  const [title, setTitle] = useState("Featured Gif's")
  const [is_search, setIsSearch] = useState(false)
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    _fetchTrending();
  }, []);

  const _fetchTrending = async () => {
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=jTsnGpyNVTLQKFcClczKq0l0XlMDnl6A`;
    const res = await axios.get(URL);
    let data = res.data.data;
    trendingData = data.splice(0, 10);
    featuredData = data.splice(11, 50);
    setRawData(featuredData);
    setTrending(trendingData);
    setOtherGifs(featuredData);
  };

  const _fetchUserSearch = async (text) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=jTsnGpyNVTLQKFcClczKq0l0XlMDnl6A&q=${text}`;
    const res = await axios.get(URL);
    let data = res.data.data;
    console.log('First User Search ', data[0].title)
    searchedData = data.splice(0,20);
    setSearchData(searchedData);
    setTitle('Searched Result')
    setRawData(searchedData)
    setIsSearch(true);
  };

  const _searchItem = async (text) => {
    await _fetchUserSearch(text);
  }

  const _clearSearch = () => {
    setTitle("Featured Gif's")
    setRawData(otherGifs)
    setIsSearch(false)
  }

  return (
    <SafeAreaView>

      <SearchBar isSearch={is_search} onClick={(text) => _searchItem(text)} />

          <View style={{ marginTop: 20 }}>
            <Heading title="Trending GIPHY" />
          </View>

          <FlatList
            style={{ marginLeft: 4 }}
            data={trending}
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

          <View style={{ marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Heading title={title} />
           {is_search ?  <Text style={{color: 'red', alignSelf: 'center', marginRight: 20}} onPress={_clearSearch}>Reset</Text> : null }
          </View>

          <FlatList
            style={{ alignSelf: 'center', marginBottom: 20 }}
            data={rawData}
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

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: 1
})

export default Home;