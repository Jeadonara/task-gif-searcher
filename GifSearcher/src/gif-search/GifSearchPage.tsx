import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import commonStyles from '../common/styles/CommonStyles';
import SearchInput from '../common/components/SearchInput';
import giphyService from './giphy/GIPHYService';
import SingleGif from './components/SingleGif';
import {EMPTY_GIF, EMPTY_GIF_COLLECTION} from './models/GifModel';
import GifCollection from './components/GifCollection';
import GifModal from './components/GifModal';

const GifSearchPage = () => {
  const [search, setSearch] = useState('');
  const [gif, setGif] = useState(EMPTY_GIF);
  const [gifs, setGifs] = useState(EMPTY_GIF_COLLECTION);
  const [gifClicked, setGifClicked] = useState(EMPTY_GIF);
  const timeIntervalRef = useRef<NodeJS.Timer | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const clearRandomGifInterval = (): void => {
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
    }
    timeIntervalRef.current = null;
  };

  const getRandomGif = () => {
    giphyService.getRandomGif().then(randomGif => {
      setGifs(EMPTY_GIF_COLLECTION);
      setGif(randomGif);
    });
  };

  const getSearchedGifs = (input: string) => {
    giphyService.getGifs(input).then(gifSearchOutput => {
      setGif(EMPTY_GIF);
      setGifs(gifSearchOutput);
    });
  };

  useEffect(() => {
    if (isSearching) {
      return;
    }
    getRandomGif();
    timeIntervalRef.current = setInterval(getRandomGif, 10000);
    return () => {
      clearRandomGifInterval();
    };
  }, [isSearching]);

  useEffect(() => {
    if (search && search.length > 2) {
      setIsSearching(true);
      clearRandomGifInterval();
      getSearchedGifs(search);
    }
  }, [search]);

  return (
    <View style={commonStyles.pageContainer}>
      <SearchInput
        onValueUpdate={setSearch}
        onSearchCancelled={() => setIsSearching(false)}
      />
      <SingleGif gif={gif} />
      <GifCollection
        gifs={gifs}
        onGifClicked={clickedGif => setGifClicked(clickedGif)}
      />
      <GifModal gif={gifClicked} onClose={() => setGifClicked(EMPTY_GIF)} />
    </View>
  );
};

export default GifSearchPage;
