import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from '../components/common/SearchBar';
import TrendingComponent from '../components/Trending/TrendingComponent';
import GiphyListComponent from '../components/GiphyListComponent/GiphyListComponent';
import {api_key, baseURL} from '../utils/lib/config';
import axios from 'axios';


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
    const URL = `${baseURL}trending?api_key=${api_key}&offset=0`;
    const res = await axios.get(URL);
    let data = res.data.data;
    trendingData = data.splice(0, 10);
    featuredData = data.splice(11, 50);
    setRawData(featuredData);
    setTrending(trendingData);
    setOtherGifs(featuredData);
  };

  const _fetchUserSearch = async (text) => {
    const URL = `${baseURL}search?api_key=${api_key}&q=${text}`;
    const res = await axios.get(URL);
    let data = res.data.data;
    console.log('First User Search ', data[0].title)
    let searchedData = data.splice(0,20);
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

          <SearchBar 
            isSearch={is_search} 
            onClick={(text) => _searchItem(text)} 
          />

          <TrendingComponent 
            data={trending} 
          />


          <GiphyListComponent 
            data={rawData} 
            is_search={is_search}
            _clearSearch={_clearSearch}
            title={title}
          />

    </SafeAreaView>
  )
}

export default Home;