import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import commonStyles from '../common/styles/CommonStyles';
import SearchInput from '../common/components/SearchInput';
import giphyService from './giphy/GIPHYService';
import SingleGif from './components/SingleGif';
import {EMPTY_GIF_MODEL} from './models/GifModel';

const GifSearchPage = () => {
  const [search, setSearch] = useState('');
  const [gif, setGif] = useState(EMPTY_GIF_MODEL);

  useEffect(() => {
    setInterval(
      () =>
        giphyService.getRandomGif().then(randomGif => {
          setGif(randomGif);
        }),
      10000,
    );
  }, []);

  useEffect(() => {
    if (search && search.length > 2) {
    }
  }, [search]);

  return (
    <View style={commonStyles.pageContainer}>
      <SearchInput onValueUpdate={setSearch} />
      <SingleGif gif={gif} />
    </View>
  );
};

export default GifSearchPage;
