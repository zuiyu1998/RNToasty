export declare enum ToastType {
    Normal = 0,
    Info = 1,
    Success = 2,
    Warning = 3,
    Error = 4
}
export declare enum Position {
    Top = "top",
    Center = "center",
    Bottom = "bottom"
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
declare class Toasty {
    static show(option: Options): void;
}
export default Toasty;
//# sourceMappingURL=index.d.ts.map