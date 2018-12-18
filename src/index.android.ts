/// <reference path="./typings/wear-27.1.1.d.ts" />

import { ContentView } from 'tns-core-modules/ui/content-view';
import { ad } from 'tns-core-modules/utils/utils';

export class BoxInsetLayout extends ContentView {
  public nativeView: android.support.wear.widget.BoxInsetLayout;
  private _androidViewId: number;

  constructor() {
    super();
    console.log('BoxInsetLayout constructor...');
  }

  nativeViewProtected: android.support.wear.widget.BoxInsetLayout;

  public createNativeView() {
    const boxInsetLayout = new android.support.wear.widget.BoxInsetLayout(
      this._context
    );
    console.log('boxInsetLayout', boxInsetLayout);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    boxInsetLayout.setId(this._androidViewId);

    const res = (ad.getApplicationContext() as android.content.Context).getResources();
    console.log('resources', res);

    const scale = res.getDisplayMetrics().density;
    console.log('scale', scale);

    const dpAsPixels15 = 15 * scale + 0.5;
    boxInsetLayout.setPadding(
      dpAsPixels15,
      dpAsPixels15,
      dpAsPixels15,
      dpAsPixels15
    );
    console.log('set padding for boxinsetLayout...');

    // // BoxInsetLayout adds padding by default on round devices. Add some on square devices.
    // boxInsetLayout.setOnApplyWindowInsetsListener(
    // 	new android.view.View.OnApplyWindowInsetsListener({
    // 		onApplyWindowInsets: (
    // 			v: android.view.View,
    // 			insets: android.view.WindowInsets
    // 		) => {
    // 			if (!insets.isRound()) {
    // 				v.setPaddingRelative(
    // 					res.getDimensionPixelSize(12),
    // 					v.getPaddingTop(),
    // 					v.getPaddingEnd(),
    // 					v.getPaddingBottom()
    // 				);
    // 			}
    // 			return v.onApplyWindowInsets(insets);
    // 		}
    // 	})
    // );

    const frameLayout = new android.widget.FrameLayout(this._context);
    const dpAsPixels5 = 5 * scale + 0.5;
    frameLayout.setPadding(dpAsPixels5, dpAsPixels5, dpAsPixels5, dpAsPixels5);
    console.log('frameLayout', frameLayout);

    try {
      const params = new android.support.wear.widget.BoxInsetLayout.LayoutParams(
        android.view.ViewGroup.LayoutParams.MATCH_PARENT,
        android.view.ViewGroup.LayoutParams.MATCH_PARENT,
        android.view.Gravity.FILL,
        15
      );
      console.log(params);
      console.log('setting layout params....');
      frameLayout.setLayoutParams(params);

      // boxInsetLayout.addView(frameLayout, 0);
    } catch (error) {
      console.log(error);
    }

    // return boxInsetLayout;
    return frameLayout;
  }

  // public initNativeView() {
  // 	super.initNativeView();
  // }

  // public disposeNativeView() {
  // 	const nativeView = this.nativeView as any;
  // 	super.disposeNativeView();
  // }
}
