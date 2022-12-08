package com.toasty;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;

import android.graphics.Typeface;

import android.graphics.Color;
import android.view.Gravity;
import android.widget.Toast;

import androidx.annotation.NonNull;

import es.dmoral.toasty.Toasty;

@ReactModule(name = RNToastyModule.NAME)
public class RNToastyModule extends ReactContextBaseJavaModule {
  public static final String NAME = "RNToasty";

  public RNToastyModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void Show(final ReadableMap props) {

    Toasty.Config config = Toasty.Config.getInstance();

    int type = props.getInt("type");

    String title = props.getString("title");
    int titleSize = props.getInt("titleSize");
    String titleColor = props.getString("titleColor");

    int duration = props.getInt("duration");
    String tintColor = props.getString("tintColor");


    String fontFamily = props.getString("fontFamily");

    String position = props.getString("position");
    int offsetX = props.getInt("offsetX");
    int offsetY = props.getInt("offsetY");


    if (titleSize != 0) {
      config.setTextSize(titleSize);
    }

    if(fontFamily.length() > 0) {
      Typeface typeface = Typeface.createFromAsset(getCurrentActivity().getAssets(),"fonts/" + fontFamily + ".ttf");
      config.setToastTypeface(typeface);
    }

    config.apply(); // required

    Toast toast = null;

    if (tintColor.length() <= 0) {
      switch (type) {
        case 0:
          toast = Toasty.normal(getCurrentActivity(), title, duration);
          break;
        case 1:
          toast = Toasty.info(getCurrentActivity(), title, duration, false);
          break;
        case 2:
          toast = Toasty.success(getCurrentActivity(), title, duration, false);
          break;
        case 3:
          toast = Toasty.warning(getCurrentActivity(), title, duration, false);
          break;
        case 4:
          toast = Toasty.error(getCurrentActivity(), title, duration, false);
          break;
      }
    } else {
      toast = Toasty.custom(getCurrentActivity(), title, null, Color.parseColor(tintColor), Color.parseColor(titleColor), duration, false, true);
    }

    if(toast != null) {
      toast.setGravity(getGravity((position)), offsetX, offsetY);
      toast.show();
    }
  }

  private int getGravity(String gravity) {
    switch(gravity) {
      case "top":
        return Gravity.TOP;
      case "center":
        return Gravity.CENTER;
      case "bottom":
      default:
        return Gravity.BOTTOM;
    }
  };
}
