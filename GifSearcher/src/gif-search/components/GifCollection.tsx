import React from 'react';
import {GifModel} from '../models/GifModel';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {DEFAULT_SPACING} from '../../common/styles/CommonStyles';

const ITEM_HEIGHT = 100;
const ITEM_MARGIN = 8;

const GifCollection = (props: {
  gifs: GifModel[];
  onGifClicked: (gif: GifModel) => void;
}) => {
  const {gifs} = props;
  if (gifs && gifs.length > 0) {
    return (
      <FlatList
        data={gifs}
        numColumns={2}
        initialNumToRender={10}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={{marginVertical: DEFAULT_SPACING}}
        contentContainerStyle={{maxWidth: '100%'}}
        keyExtractor={item => item.source}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT + ITEM_MARGIN,
          offset: (ITEM_HEIGHT + ITEM_MARGIN) * index,
          index,
        })}
        renderItem={(value: ListRenderItemInfo<GifModel>) => (
          <TouchableOpacity
            onPress={() => {
              props.onGifClicked(value.item);
            }}>
            <Image
              source={{uri: value.item.sourceStill}}
              style={[styles.gif, {aspectRatio: value.item.aspectRatio}]}
            />
          </TouchableOpacity>
        )}
      />
    );
  } else {
    return null;
  }
};

export default GifCollection;

const styles = StyleSheet.create({
  gif: {height: ITEM_HEIGHT, margin: 8},
});
