import React,{useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import Heading from '../components/common/Heading';
import SearchBar from '../components/common/SearchBar';
import TrendingItem from '../components/flatlist/TrendingItem';
import FastImage from 'react-native-fast-image';
import axios from 'axios';

const {height, width} = Dimensions.get('window');

const Home = () => {
    const [trending, setTrending] = useState([])
    const [otherGifs, setOtherGifs] = useState([])

    useEffect(() => {
        _fetchTrending();
      },[]);

    const _fetchTrending = async () => {
        const URL = `https://api.giphy.com/v1/gifs/trending?api_key=jTsnGpyNVTLQKFcClczKq0l0XlMDnl6A`;
        const res = await axios.get(URL);
        console.log('Await R ------> ',res.data.data[0])
        let data = res.data.data;
        trendingData = data.splice(0,10);
        featuredData = data.splice(11,50);
        setTrending(trendingData);
        setOtherGifs(featuredData);
      };  

    const renderItem = ({item}) => {
       const height = item.images.fixed_width.height;

       return(
         <View style={{margin: 2}}>
              <FastImage
                style={{ height: parseInt(height), width: width / 2 - 10,  }}
                source={{
                  uri:
                    item.images.fixed_width.url,
                  headers: { Authorization: 'token' },
                  priority: FastImage.priority.normal,
                  cache: FastImage.cacheControl.immutable,
                }}
                resizeMode='stretch'
             />  
         </View>
       )
    }

    return (
        <SafeAreaView>

            <SearchBar/> 
 
            <View>
              <Heading title="Trending GIPHY" />
            </View>

            <FlatList
                style={{marginLeft: 4}}
                data={trending}
                horizontal={true}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <TrendingItem width={item.images.fixed_height.width} 
                  image={item.images.fixed_height.url} 
                  title={item.title}>
                  </TrendingItem>
                )}
            />

            <View>
              <Heading title="Featured GIF's" />
            </View>

            <FlatList
            style={{alignSelf: 'center'}}
                data={otherGifs}
                numColumns={2}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            /> 
            
          
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flex : 1
})

export default Home;