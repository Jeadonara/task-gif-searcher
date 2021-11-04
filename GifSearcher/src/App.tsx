import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import GifSearchPage from './gif-search/GifSearchPage';
import commonStyles from './common/styles/CommonStyles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        ...commonStyles.columnContainer,
        backgroundColor: Colors.lighter,
      }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <GifSearchPage />
    </SafeAreaView>
  );
};

export default App;
