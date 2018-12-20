/// <reference path="./typings/wear-27.1.1.d.ts" />

import { ContentView } from 'tns-core-modules/ui/content-view';

export class BoxInsetLayout extends ContentView {
  public nativeView: android.widget.LinearLayout;
  public nativeViewProtected: android.support.wear.widget.BoxInsetLayout;
  private _boxInsetLayout: android.support.wear.widget.BoxInsetLayout;
  private _androidViewId: number;

  constructor() {
    super();
  }

  public createNativeView() {
    this.nativeView = new android.widget.LinearLayout(this._context);
    console.log('linearLayout', this.nativeView);

    this._boxInsetLayout = new android.support.wear.widget.BoxInsetLayout(
      this._context
    );
    console.log('boxInsetlayout', this._boxInsetLayout);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this.nativeView.setId(this._androidViewId);
    this.nativeView.setOrientation(android.widget.LinearLayout.VERTICAL);
    this.nativeView.setGravity(android.view.Gravity.FILL_VERTICAL);
    this.nativeView.setLayoutParams(
      new android.support.wear.widget.BoxInsetLayout.LayoutParams(
        android.view.ViewGroup.LayoutParams.FILL_PARENT,
        android.view.ViewGroup.LayoutParams.FILL_PARENT,
        android.view.Gravity.FILL_VERTICAL,
        android.support.wear.widget.BoxInsetLayout.LayoutParams.BOX_ALL
      )
    );

    this._boxInsetLayout.addView(this.nativeView);

    return this.nativeView;
  }

  public initNativeView() {
    super.initNativeView();
  }

  public disposeNativeView() {
    super.disposeNativeView();
  }
}
