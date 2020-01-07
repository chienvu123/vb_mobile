import {Dimensions, Platform} from 'react-native';
import {isTaiTho} from './device';

const base = {
  width: 360,
  height: 640,
};

const iOSStatusBarHeight = isTaiTho() === true ? 44 : 20;
const statusBarHeight = Platform.OS === 'ios' ? iOSStatusBarHeight : 32;
const navBarHeight =
  Platform.OS === 'ios' ? 44 + statusBarHeight : 35 + statusBarHeight;
const {width, height} = Dimensions.get('window');
const ratioH = height / base.height;
const ratioW = width / base.width;

const horizontalScale = (size: number, factor: number = 1): number =>
  size + (ratioW * size - size) * factor;
const verticalScale = (size: number, factor: number = 1): number =>
  size + (ratioH * size - size) * factor;
const header = isTaiTho() ? 80 : 60;
const heightTabbar = isTaiTho() ? 50 : 40;
const marginPost = verticalScale(8);
const heightScreen = height;
export {
  width as widthScreen,
  heightScreen,
  statusBarHeight,
  navBarHeight,
  horizontalScale,
  verticalScale,
  header,
  heightTabbar,
  marginPost,
};
