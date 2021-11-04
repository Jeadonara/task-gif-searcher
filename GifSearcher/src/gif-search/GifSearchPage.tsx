import React, {useState} from 'react';
import {View} from 'react-native';
import commonStyles from '../common/styles/CommonStyles';
import SearchInput from '../common/components/SearchInput';

const GifSearchPage = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={commonStyles.pageContainer}>
      <SearchInput onValueUpdate={setSearch} />
    </View>
  );
};

export default GifSearchPage;
