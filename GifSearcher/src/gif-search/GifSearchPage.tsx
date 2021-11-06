import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import commonStyles from '../common/styles/CommonStyles';
import SearchInput from '../common/components/SearchInput';
import giphyService from './giphy/GIPHYService';
import SingleGif from './components/SingleGif';
import {EMPTY_GIF, EMPTY_GIF_COLLECTION} from './models/GifModel';
import GifCollection from './components/GifCollection';

const GifSearchPage = () => {
  const [search, setSearch] = useState('');
  const [gif, setGif] = useState(EMPTY_GIF);
  const [gifs, setGifs] = useState(EMPTY_GIF_COLLECTION);
  const timeInterval = useRef<NodeJS.Timer | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const renderRandomGif = () => {
    giphyService.getRandomGif().then(randomGif => {
      setGifs(EMPTY_GIF_COLLECTION);
      setGif(randomGif);
    });
  };

  const renderSearchedGifs = (input: string) => {
    giphyService.getGifs(input).then(gifSearchOutput => {
      setGif(EMPTY_GIF);
      setGifs(gifSearchOutput);
    });
  };

  useEffect(() => {
    if (isSearching) {
      return;
    }
    renderRandomGif();
    timeInterval.current = setInterval(renderRandomGif, 10000);
    return () => {
      if (timeInterval.current) {
        clearInterval(timeInterval.current);
      }
    };
  }, [isSearching]);

  useEffect(() => {
    if (search && search.length > 2) {
      setIsSearching(true);
      if (timeInterval.current) {
        clearInterval(timeInterval.current);
      }
      timeInterval.current = null;
      renderSearchedGifs(search);
    }
  }, [search]);

  return (
    <View style={commonStyles.pageContainer}>
      <SearchInput
        onValueUpdate={setSearch}
        onSearchCancelled={() => setIsSearching(false)}
      />
      <SingleGif gif={gif} />
      <GifCollection gifs={gifs} />
    </View>
  );
};

export default GifSearchPage;
