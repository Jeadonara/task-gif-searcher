import React, {useEffect, useState} from 'react';
import {Modal, Text, View} from 'react-native';
import SingleGif from './SingleGif';
import {GifModel} from '../models/GifModel';
import commonStyles from '../../common/styles/CommonStyles';
import Icon from '../../common/components/Icon';
import BackArrow from '../../common/images/arrow_left.png';

const GifModal = (props: {gif: GifModel; onClose: () => void}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(!modalVisible);
    props.onClose();
  };

  useEffect(() => {
    setModalVisible(!!props.gif);
  }, [props.gif]);
  if (props.gif?.source) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
        hardwareAccelerated
        statusBarTranslucent>
        <View style={commonStyles.pageContainer}>
          <View style={commonStyles.header}>
            <Icon.Button
              style={commonStyles.headerButton}
              iconProps={{source: BackArrow, width: 32, height: 32}}
              onClick={closeModal}
            />
            <Text style={[commonStyles.titleText, {textAlign: 'center'}]}>
              {props.gif.title}
            </Text>
          </View>

          <SingleGif gif={props.gif} />
        </View>
      </Modal>
    );
  } else {
    return null;
  }
};

export default GifModal;
