import React from 'react';
import {GifModel} from '../models/GifModel';
import {Image, StyleSheet, Text, View} from 'react-native';
import commonStyles from '../../common/styles/CommonStyles';

const SingleGif = (props: {gif: GifModel}) => {
  const {source, title, rating, aspectRatio} = props.gif;
  if (source) {
    return (
      <View style={styles.container}>
        <Image
          style={[styles.gif, {aspectRatio: aspectRatio}]}
          source={{uri: source}}
        />
        <View style={styles.detailContainer}>
          <View style={styles.titleContainer}>
            <Text style={commonStyles.captionText}>Title:</Text>
            <Text style={commonStyles.captionText}>
              {title || 'Title not exists'}
            </Text>
            <Text style={commonStyles.captionText}>{source}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text
              style={styles.ratingText}
              adjustsFontSizeToFit={true}
              allowFontScaling={true}>
              {rating}
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default SingleGif;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.columnContainer,
    marginVertical: 32,
    minWidth: '100%',
  },
  gif: {width: '100%'},
  detailContainer: {
    ...commonStyles.rowContainer,
    maxHeight: 64,
    marginTop: 32,
    justifyContent: 'space-between',
  },
  titleContainer: {
    ...commonStyles.columnContainer,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  ratingContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
