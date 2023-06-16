import React from 'react';
import {Text as RNText, TextStyle} from 'react-native';

type TextType = {
  text: string;
  style?: TextStyle;
};

export const Text = ({style, text}: TextType) => {
  return <RNText style={style}>{text}</RNText>;
};
