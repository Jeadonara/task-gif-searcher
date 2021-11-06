import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyles, {DEFAULT_SPACING} from '../styles/CommonStyles';
import Icon from './Icon';
import SearchIcon from '../images/search.png';
import CrossIcon from '../images/cross.png';

const SearchInput = (props: {
  onValueUpdate: (value: string) => void;
  onSearchCancelled: () => void;
}) => {
  const [search, setSearch] = useState('');
  const textInputRef = useRef<TextInput | null>(null);
  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Icon
          source={SearchIcon}
          width={24}
          height={24}
          style={{marginHorizontal: DEFAULT_SPACING}}
        />
        <TextInput
          style={{flex: 1}}
          ref={textInputRef}
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
      <TouchableOpacity
        style={styles.cancelButtonContainer}
        onPress={() => {
          setSearch('');
          props.onValueUpdate('');
          textInputRef.current?.blur();
          props.onSearchCancelled();
        }}>
        <Text style={commonStyles.titleText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.rowContainer,
    minHeight: 48,
    maxHeight: 48,
  },
  searchInputContainer: {
    ...commonStyles.rowContainer,
    minHeight: 48,
    maxHeight: 48,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0.5,
    borderRadius: 48,
    marginRight: DEFAULT_SPACING,
  },
  buttonContainer: {
    marginRight: DEFAULT_SPACING,
    justifyContent: 'center',
    maxWidth: 24,
  },
  cancelButtonContainer: {
    ...commonStyles.buttonContainer,
    justifyContent: 'center',
    maxWidth: 64,
  },
});
