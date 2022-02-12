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
  const [offset ,setOffset] = useState(0)

  useEffect(() => {
    if(!is_search)
    {
    _fetchTrending();
    }
  }, [offset]);

  const _fetchTrending = async () => {
    const URL = `${baseURL}trending?api_key=${api_key}&offset=${offset}`;
    const res = await axios.get(URL);
    let data = res.data.data;
    trendingData = data.splice(0, 10);
    featuredData = data.splice(11, 50);
    setRawData(prevArray => [...prevArray, ...featuredData]);
    setTrending(trendingData);
    setOtherGifs(prevArray => [...prevArray, ...featuredData]);
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

  const _handleLoadMore = async () => {
    const CurrentOffset = offset;
    const afterSet = CurrentOffset + 50;
    console.log('Handle More', afterSet);
    setOffset(afterSet);
  }

  return (
    <SafeAreaView>

          <SearchBar 
            isSearch={is_search} 
            onClick={(text) => _searchItem(text)} 
          />

        {is_search ? null : (
          <TrendingComponent 
            data={trending} 
          />
        )} 


          <GiphyListComponent 
            data={rawData} 
            is_search={is_search}
            _clearSearch={_clearSearch}
            _handleLoadMore={_handleLoadMore}
            title={title}
          />

    </SafeAreaView>
  )
}

export default Home;