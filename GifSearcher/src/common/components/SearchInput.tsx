import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import commonStyles from '../styles/CommonStyles';
import Icon from './Icon';
import SearchIcon from '../images/search.png';
import CrossIcon from '../images/cross.png';

const SearchInput = (props: {onValueUpdate: (value: string) => void}) => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Icon
        source={SearchIcon}
        width={24}
        height={24}
        style={{marginHorizontal: 16}}
      />
      <TextInput
        style={{flex: 1}}
        value={search}
        onChangeText={text => {
          setSearch(text);
          props.onValueUpdate(text);
        }}
        autoCorrect={false}
      />
      <Icon.Button
        style={styles.buttonContainer}
        iconProps={{source: CrossIcon, width: 24, height: 24}}
        onClick={() => {
          setSearch('');
          props.onValueUpdate('');
        }}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.rowContainer,
    minHeight: 48,
    maxHeight: 48,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0.5,
    maxWidth: '90%',
    borderRadius: 48,
  },
  buttonContainer: {
    marginRight: 16,
    justifyContent: 'center',
    maxWidth: 24,
  },
});
