import { NativeModules } from 'react-native';

const RNToasty = NativeModules.RNToasty;

export enum ToastType {
  Normal = 0,
  Info = 1,
  Success = 2,
  Warning = 3,
  Error = 4,
}

export enum Position {
  Top = 'top',
  Center = 'center',
  Bottom = 'bottom',
}

export interface Options {
  title: string;
  type?: ToastType;
  titleSize?: number;
  titleColor?: string;
  duration?: number;
  tintColor?: string;
  fontFamily?: string;
  position?: Position;
  offsetX?: number;
  offsetY?: number;
}

class Toasty {
  static show(option: Options) {
    if (!option.type) {
      option.type = ToastType.Normal;
    }
    if (!option.titleSize) {
      option.titleSize = 0;
    }
    if (!option.titleColor) {
      option.titleColor = '#ffffff';
    }
    if (!option.duration) {
      option.duration = 0;
    }
    if (!option.tintColor) {
      option.tintColor = '';
    }
    if (!option.fontFamily) {
      option.fontFamily = '';
    }
    if (!option.position) {
      option.position = Position.Bottom;
    }
    if (!option.offsetX) {
      option.offsetX = 0;
    }
    if (!option.offsetY) {
      option.offsetY = 50;
    }

    RNToasty.Show(option);
  }
}

export default Toasty;
