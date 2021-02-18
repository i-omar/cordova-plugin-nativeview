/// <reference types="cordova" />

/**
 * Use `dtslint` to verify the syntax of this
 * typescript declaration file
 * @see https://github.com/Microsoft/dtslint
 */

declare global {
  interface CordovaPlugins {
      NativeView: NativeView
  }
}

export interface ResultView {
  success: boolean;
  name?: string;
  message?: string;
  uri?: string;
  [key: string]: any;
}

export interface ResultAppInstalled extends ResultView {
  packageName?: string;
  applicationInfo?: string;
  activityName?: string;
}

export interface NativeParams {
  package?: string;
  packageName?: string;
  packageApp?: string;
  className?: string;
  uri?: string;
  storyboardName?: string;
  viewControllerName?: string;
  params?: string;
}

export interface NativeMarketParams extends NativeParams {
  marketId?: string;
}

export interface NativeView {

  /**
   * Shows the native view.
   * 
   * Define the `packageOrClass` param to a package (Android) or a 
   * storyboard/classname (IOS)
   * 
   * ```ts
   * 
   * //Android
   * cordova.plugins.NativeView.show('com.mycompany', 'MyActivity')
   * .then(() => {
   *    // Do something
   * });
   * 
   * //IOS
   * cordova.plugins.NativeView.show('MyStoryboard', 'MyUIViewController')
   * .then(() => {
   *    // Do something
   * });
   * 
   * //OR Back to previous View (IOS only)
   * cordova.plugins.NativeView.show().then(() => {
   *    // Do something
   * });
   * 
   * ```
   * 
   * @param {NativeParams|string} packageOrClass Package or class name of view to open
   * @param {string} className Class name of view to open
   * @param {any} [extraParams] [Optional] Params to send to a Native view that will be opened
   * @param {Function} [success] [Optional] Callback when success, if you don't want use promise "then()"
   * @param {Function} [error] [Optional] Callback when error happens, if you don't want use promise "catch()"
   */
  show(packageOrClass: NativeParams | string, className?: string, extraParams?: any, success?: Function, error?: Function): Promise<ResultView>;
  
    
  /**
   * Check if a specific app is installed
   *
   * @param {NativeParams} config
   * @param {Function} [success] Callback when success. Use `.then()` Promise method, instead
   * @param {Function} [error] Callback callbed when an error happens. Use `.catch()` Promise method, instead
   * @returns {Promise<ResultAppInstalled>} Returns data information about the installed app
   * @memberof NativeView
   */
  addAppointmentNotification(config: NativeParams, success?: Function, error?: Function): Promise<ResultAppInstalled>;
  
  /**
   * Check if a specific app is installed
   *
   * @param {NativeParams} config
   * @param {Function} [success] Callback when success. Use `.then()` Promise method, instead
   * @param {Function} [error] Callback callbed when an error happens. Use `.catch()` Promise method, instead
   * @returns {Promise<ResultAppInstalled>} Returns data information about the installed app
   * @memberof NativeView
   */
  checkIfAppInstalled(config: NativeParams, success?: Function, error?: Function): Promise<ResultAppInstalled>;
  
  /**
   * Shows a store/market fo install a specific app
   *
   * @param {NativeMarketParams} config Native package and/or marketId to show in Google Play/Apple Store
   * @param {Function} [success] Callback when success. Use `.then()` Promise method, instead
   * @param {Function} [error] Callback callbed when an error happens. Use `.catch()` Promise method, instead
   * @returns {Promise<ResultView>}
   * @memberof NativeView
   */
  showMarket(config: NativeMarketParams, success?: Function, error?: Function): Promise<ResultView>;

  /**
   * ### ANDROID ONLY
   * 
   * Get the **Android** current build variant FLAVOR
   * This is great if you change the FLAVOR in compile time
   * 
   * @param {{catchError?: boolean}} config `config.catchError` True, if you wish catch a JSON with error information
   * @param {Function} [success] Callback when success. Use `.then()` Promise method, instead
   * @param {Function} [error] Callback callbed when an error happens. Use `.catch()` Promise method, instead
   * @returns {Promise<string>} Returns a current FLAVOR string
   * @memberof NativeView
   */
  getBuildVariant(config: {catchError?: boolean}, success?: Function, error?: Function): Promise<string>;
}