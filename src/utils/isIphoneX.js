import { Dimensions, Platform } from 'react-native';

export function isIphoneX() {
  let dimention = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimention.height === 812 || dimention.width === 812)
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  } else {
    return regularStyle;
  }
}
