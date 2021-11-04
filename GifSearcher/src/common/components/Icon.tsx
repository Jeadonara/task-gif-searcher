import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import commonStyles from '../styles/CommonStyles';

interface IconPropTypes {
  width?: number;
  height?: number;
  source: ImageSourcePropType;
  style?: ImageStyle;
}

const Icon = (props: IconPropTypes) => {
  return (
    <Image
      source={props.source}
      style={[
        props.style,
        {width: props.width || 16, height: props.height || 16},
      ]}
    />
  );
};

interface IconButtonPropTypes {
  onClick: () => void;
  style?: ViewStyle;
  iconProps: IconPropTypes;
}

const IconButton = (props: IconButtonPropTypes) => {
  return (
    <TouchableOpacity
      style={[commonStyles.defaultButtonContainer, props.style]}
      onPress={props.onClick}>
      <Icon {...props.iconProps} />
    </TouchableOpacity>
  );
};

Icon.Button = IconButton;

export default Icon;
