import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
export declare class BoxInsetLayout extends GridLayout {
    nativeView: any;
    private _androidViewId;
    constructor();
    nativeViewProtected: android.support.wear.widget.BoxInsetLayout;
    createNativeView(): globalAndroid.widget.FrameLayout;
}
