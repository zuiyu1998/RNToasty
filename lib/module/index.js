import { NativeModules } from 'react-native';
const RNToasty = NativeModules.RNToasty;
export let ToastType;
(function (ToastType) {
  ToastType[ToastType["Normal"] = 0] = "Normal";
  ToastType[ToastType["Info"] = 1] = "Info";
  ToastType[ToastType["Success"] = 2] = "Success";
  ToastType[ToastType["Warning"] = 3] = "Warning";
  ToastType[ToastType["Error"] = 4] = "Error";
})(ToastType || (ToastType = {}));
export let Position;
(function (Position) {
  Position["Top"] = "top";
  Position["Center"] = "center";
  Position["Bottom"] = "bottom";
})(Position || (Position = {}));
class Toasty {
  static show(option) {
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
//# sourceMappingURL=index.js.map