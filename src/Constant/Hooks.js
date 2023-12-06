import {Appearance, Dimensions} from 'react-native';

const Height = value => {
  const deviceHeight = Dimensions.get('screen').height;
  const heightValue = (value / 100) * deviceHeight;
  return heightValue;
};

const Width = value => {
  const deviceWidth = Dimensions.get('screen').width;
  const widthValue = (value / 100) * deviceWidth;
  return widthValue;
};

const DarkMode = () => {
  return Appearance.getColorScheme() === 'dark';
};

export {Height, Width, DarkMode};
