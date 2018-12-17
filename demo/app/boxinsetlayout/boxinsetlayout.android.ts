import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import * as application from 'tns-core-modules/application';
import { ContentView } from 'tns-core-modules/ui/content-view';
import { Color } from 'tns-core-modules/color';
import { FlexboxLayout } from 'tns-core-modules/ui/layouts/flexbox-layout';

// export class BoxInsetLayout extends GridLayout {
export class BoxInsetLayout extends FlexboxLayout {
	public nativeView: any; // android.support.wear.widget.BoxInsetLayout;
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
		console.log(boxInsetLayout);

		if (!this._androidViewId) {
			this._androidViewId = android.view.View.generateViewId();
		}
		boxInsetLayout.setId(this._androidViewId);

		const res = (application.android
			.context as android.content.Context).getResources();

		const scale = res.getDisplayMetrics().density;
		const dpAsPixels15 = 15 * scale + 0.5;
		// boxInsetLayout.setPadding(
		// 	dpAsPixels15,
		// 	dpAsPixels15,
		// 	dpAsPixels15,
		// 	dpAsPixels15
		// );

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
		console.log('frameLayout', frameLayout);
		const frame2 = new android.widget.FrameLayout(this._context);
		console.log('frame2', frame2);

		// const dpAsPixels5 = 5 * scale + 0.5;
		// frame2.setPadding(dpAsPixels5, dpAsPixels5, dpAsPixels5, dpAsPixels5);

		try {
			const params = new android.support.wear.widget.BoxInsetLayout.LayoutParams(
				android.view.ViewGroup.LayoutParams.MATCH_PARENT,
				android.view.ViewGroup.LayoutParams.MATCH_PARENT,
				null,
				15
			);
			boxInsetLayout.setLayoutParams(params);
			// const params2 = new android.support.wear.widget.BoxInsetLayout.LayoutParams(
			// 	android.view.ViewGroup.LayoutParams.MATCH_PARENT,
			// 	android.view.ViewGroup.LayoutParams.MATCH_PARENT,
			// 	android.view.Gravity.CENTER,
			// 	15
			// );
			// frameLayout.setLayoutParams(params2);
			// frame2.setBackgroundColor(new Color('#336699').android);
			// const params3 = new android.support.wear.widget.BoxInsetLayout.LayoutParams(
			// 	android.view.ViewGroup.LayoutParams.MATCH_PARENT,
			// 	android.view.ViewGroup.LayoutParams.MATCH_PARENT,
			// 	android.view.Gravity.FILL
			// 	// 15
			// );
			// // frame2.setBackgroundColor(new Color('#ff4801').android);
			// frame2.setLayoutParams(params3);
			// frameLayout.addView(frame2);
			// console.log('adding frameLayout to boxInsetLayout...');
			// boxInsetLayout.addView(frameLayout);
		} catch (error) {
			console.log(error);
		}

		if (this.parent) {
			console.log('parent', this.parent);
		}

		return boxInsetLayout;
	}
}
