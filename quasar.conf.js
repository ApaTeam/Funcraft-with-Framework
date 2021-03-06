/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v1.quasar.dev/quasar-cli/quasar-conf-js

module.exports = function (/* ctx */) {
  return {
    // https://v1.quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://v1.quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v1.quasar.dev/quasar-cli/boot-files
    boot: ["i18n", "axios"],

    // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: ["app.scss"],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      "fontawesome-v5",
      // 'eva-icons',
      // 'themify',
      "line-awesome",
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      "roboto-font", // optional, you are not bound to it
      "material-icons" // optional, you are not bound to it
    ],

    // Full list of options: https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: "history", // available values: 'hash', 'history'

      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: false, // https://v1.quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://v1.quasar.dev/quasar-cli/handling-webpack
      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
      chainWebpack(/* chain */) {
        //
      }
    },

    // Full list of options: https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8082,
      open: true // opens browser window automatically
    },

    // https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: "material-icons", // Quasar icon set
      lang: "en-us", // Quasar language pack
      config: {},

      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: "auto",

      // For special cases outside of where "auto" importStrategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: ["LocalStorage", "SessionStorage", "Loading"]
    },

    // animations: 'all', // --- includes all animations
    // https://v1.quasar.dev/options/animations
    animations: [],

    // https://v1.quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://v1.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {
        exclude: [/\.map$/, /_redirects/],
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: new RegExp('https://fonts.*'),
            handler: 'CacheFirst'
          },
          {
            urlPattern: /\.js/,
            handler: 'StaleWhileRevalidate'
          },
          {
            urlPattern: /\.css/,
            handler: 'StaleWhileRevalidate'
          }]
      }, // only for GenerateSW
      manifest: {
        name: `FunCraft`,
        short_name: `FunCraft`,
        description: `A task tracker gamification app for employee`,
        display: "standalone",
        orientation: "portrait",
        background_color: "#3700B3",
        theme_color: "#000000",
        // background_color: "#ffffff",
        // theme_color: "#027be3",
        icons: [
          {
            src: "windows10/SmallTile.scale-100.png",
            sizes: "71x71"
          },
          {
            src: "windows10/SmallTile.scale-125.png",
            sizes: "89x89"
          },
          {
            src: "windows10/SmallTile.scale-150.png",
            sizes: "107x107"
          },
          {
            src: "windows10/SmallTile.scale-200.png",
            sizes: "142x142"
          },
          {
            src: "windows10/SmallTile.scale-400.png",
            sizes: "284x284"
          },
          {
            src: "windows10/Square150x150Logo.scale-100.png",
            sizes: "150x150"
          },
          {
            src: "windows10/Square150x150Logo.scale-125.png",
            sizes: "188x188"
          },
          {
            src: "windows10/Square150x150Logo.scale-150.png",
            sizes: "225x225"
          },
          {
            src: "windows10/Square150x150Logo.scale-200.png",
            sizes: "300x300"
          },
          {
            src: "windows10/Square150x150Logo.scale-400.png",
            sizes: "600x600"
          },
          {
            src: "windows10/Wide310x150Logo.scale-100.png",
            sizes: "310x150"
          },
          {
            src: "windows10/Wide310x150Logo.scale-125.png",
            sizes: "388x188"
          },
          {
            src: "windows10/Wide310x150Logo.scale-150.png",
            sizes: "465x225"
          },
          {
            src: "windows10/Wide310x150Logo.scale-200.png",
            sizes: "620x300"
          },
          {
            src: "windows10/Wide310x150Logo.scale-400.png",
            sizes: "1240x600"
          },
          {
            src: "windows10/LargeTile.scale-100.png",
            sizes: "310x310"
          },
          {
            src: "windows10/LargeTile.scale-125.png",
            sizes: "388x388"
          },
          {
            src: "windows10/LargeTile.scale-150.png",
            sizes: "465x465"
          },
          {
            src: "windows10/LargeTile.scale-200.png",
            sizes: "620x620"
          },
          {
            src: "windows10/LargeTile.scale-400.png",
            sizes: "1240x1240"
          },
          {
            src: "windows10/Square44x44Logo.scale-100.png",
            sizes: "44x44"
          },
          {
            src: "windows10/Square44x44Logo.scale-125.png",
            sizes: "55x55"
          },
          {
            src: "windows10/Square44x44Logo.scale-150.png",
            sizes: "66x66"
          },
          {
            src: "windows10/Square44x44Logo.scale-200.png",
            sizes: "88x88"
          },
          {
            src: "windows10/Square44x44Logo.scale-400.png",
            sizes: "176x176"
          },
          {
            src: "windows10/StoreLogo.scale-100.png",
            sizes: "50x50"
          },
          {
            src: "windows10/StoreLogo.scale-125.png",
            sizes: "63x63"
          },
          {
            src: "windows10/StoreLogo.scale-150.png",
            sizes: "75x75"
          },
          {
            src: "windows10/StoreLogo.scale-200.png",
            sizes: "100x100"
          },
          {
            src: "windows10/StoreLogo.scale-400.png",
            sizes: "200x200"
          },
          {
            src: "windows10/SplashScreen.scale-100.png",
            sizes: "620x300"
          },
          {
            src: "windows10/SplashScreen.scale-125.png",
            sizes: "775x375"
          },
          {
            src: "windows10/SplashScreen.scale-150.png",
            sizes: "930x450"
          },
          {
            src: "windows10/SplashScreen.scale-200.png",
            sizes: "1240x600"
          },
          {
            src: "windows10/SplashScreen.scale-400.png",
            sizes: "2480x1200"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-16.png",
            sizes: "16x16"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-20.png",
            sizes: "20x20"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-24.png",
            sizes: "24x24"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-30.png",
            sizes: "30x30"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-32.png",
            sizes: "32x32"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-36.png",
            sizes: "36x36"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-40.png",
            sizes: "40x40"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-44.png",
            sizes: "44x44"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-48.png",
            sizes: "48x48"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-60.png",
            sizes: "60x60"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-64.png",
            sizes: "64x64"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-72.png",
            sizes: "72x72"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-80.png",
            sizes: "80x80"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-96.png",
            sizes: "96x96"
          },
          {
            src: "windows10/Square44x44Logo.targetsize-256.png",
            sizes: "256x256"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-16.png",
            sizes: "16x16"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-20.png",
            sizes: "20x20"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-24.png",
            sizes: "24x24"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-30.png",
            sizes: "30x30"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-32.png",
            sizes: "32x32"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-36.png",
            sizes: "36x36"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-40.png",
            sizes: "40x40"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-44.png",
            sizes: "44x44"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-48.png",
            sizes: "48x48"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-60.png",
            sizes: "60x60"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-64.png",
            sizes: "64x64"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-72.png",
            sizes: "72x72"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-80.png",
            sizes: "80x80"
          },
          {
            src: "windows10/Square44x44Logo.altform-unplated_targetsize-96.png",
            sizes: "96x96"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-unplated_targetsize-256.png",
            sizes: "256x256"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-16.png",
            sizes: "16x16"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-20.png",
            sizes: "20x20"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-24.png",
            sizes: "24x24"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-30.png",
            sizes: "30x30"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-32.png",
            sizes: "32x32"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-36.png",
            sizes: "36x36"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-40.png",
            sizes: "40x40"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-44.png",
            sizes: "44x44"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-48.png",
            sizes: "48x48"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-60.png",
            sizes: "60x60"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-64.png",
            sizes: "64x64"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-72.png",
            sizes: "72x72"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-80.png",
            sizes: "80x80"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-96.png",
            sizes: "96x96"
          },
          {
            src:
              "windows10/Square44x44Logo.altform-lightunplated_targetsize-256.png",
            sizes: "256x256"
          },
          {
            src: "windows/windows-smallsquare-24-24.png",
            sizes: "24x24"
          },
          {
            src: "windows/windows-smallsquare-30-30.png",
            sizes: "30x30"
          },
          {
            src: "windows/windows-smallsquare-42-42.png",
            sizes: "42x42"
          },
          {
            src: "windows/windows-smallsquare-54-54.png",
            sizes: "54x54"
          },
          {
            src: "windows/windows-splashscreen-1116-540.png",
            sizes: "1116x540"
          },
          {
            src: "windows/windows-splashscreen-868-420.png",
            sizes: "868x420"
          },
          {
            src: "windows/windows-splashscreen-620-300.png",
            sizes: "620x300"
          },
          {
            src: "windows/windows-squarelogo-270-270.png",
            sizes: "270x270"
          },
          {
            src: "windows/windows-squarelogo-210-210.png",
            sizes: "210x210"
          },
          {
            src: "windows/windows-squarelogo-150-150.png",
            sizes: "150x150"
          },
          {
            src: "windows/windows-squarelogo-120-120.png",
            sizes: "120x120"
          },
          {
            src: "windows/windows-storelogo-90-90.png",
            sizes: "90x90"
          },
          {
            src: "windows/windows-storelogo-70-70.png",
            sizes: "70x70"
          },
          {
            src: "windows/windows-storelogo-50-50.png",
            sizes: "50x50"
          },
          {
            src: "windows/windowsphone-appicon-106-106.png",
            sizes: "106x106"
          },
          {
            src: "windows/windowsphone-appicon-62-62.png",
            sizes: "62x62"
          },
          {
            src: "windows/windowsphone-appicon-44-44.png",
            sizes: "44x44"
          },
          {
            src: "windows/windowsphone-mediumtile-360-360.png",
            sizes: "360x360"
          },
          {
            src: "windows/windowsphone-mediumtile-210-210.png",
            sizes: "210x210"
          },
          {
            src: "windows/windowsphone-mediumtile-150-150.png",
            sizes: "150x150"
          },
          {
            src: "windows/windowsphone-smalltile-170-170.png",
            sizes: "170x170"
          },
          {
            src: "windows/windowsphone-smalltile-99-99.png",
            sizes: "99x99"
          },
          {
            src: "windows/windowsphone-smalltile-71-71.png",
            sizes: "71x71"
          },
          {
            src: "windows/windowsphone-storelogo-120-120.png",
            sizes: "120x120"
          },
          {
            src: "windows/windowsphone-storelogo-70-70.png",
            sizes: "70x70"
          },
          {
            src: "windows/windowsphone-storelogo-50-50.png",
            sizes: "50x50"
          },
          {
            src: "msteams/msteams-192-192.png",
            sizes: "192x192"
          },
          {
            src: "msteams/msteams-silhouette-32-32.png",
            sizes: "32x32"
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "512x512"
          },
          {
            src: "android/android-launchericon-192-192.png",
            sizes: "192x192"
          },
          {
            src: "android/android-launchericon-144-144.png",
            sizes: "144x144"
          },
          {
            src: "android/android-launchericon-96-96.png",
            sizes: "96x96"
          },
          {
            src: "android/android-launchericon-72-72.png",
            sizes: "72x72"
          },
          {
            src: "android/android-launchericon-48-48.png",
            sizes: "48x48"
          },
          {
            src: "chrome/chrome-extensionmanagementpage-48-48.png",
            sizes: "48x48"
          },
          {
            src: "chrome/chrome-favicon-16-16.png",
            sizes: "16x16"
          },
          {
            src: "chrome/chrome-installprocess-128-128.png",
            sizes: "128x128"
          },
          {
            src: "firefox/firefox-marketplace-512-512.png",
            sizes: "512x512"
          },
          {
            src: "firefox/firefox-marketplace-128-128.png",
            sizes: "128x128"
          },
          {
            src: "firefox/firefox-general-256-256.png",
            sizes: "256x256"
          },
          {
            src: "firefox/firefox-general-128-128.png",
            sizes: "128x128"
          },
          {
            src: "firefox/firefox-general-90-90.png",
            sizes: "90x90"
          },
          {
            src: "firefox/firefox-general-64-64.png",
            sizes: "64x64"
          },
          {
            src: "firefox/firefox-general-48-48.png",
            sizes: "48x48"
          },
          {
            src: "firefox/firefox-general-32-32.png",
            sizes: "32x32"
          },
          {
            src: "firefox/firefox-general-16-16.png",
            sizes: "16x16"
          }
        ]
        // [
        //   {
        //     src: "icons/icon-128x128.png",
        //     sizes: "128x128",
        //     type: "image/png"
        //   },
        //   {
        //     src: "icons/icon-192x192.png",
        //     sizes: "192x192",
        //     type: "image/png"
        //   },
        //   {
        //     src: "icons/icon-256x256.png",
        //     sizes: "256x256",
        //     type: "image/png"
        //   },
        //   {
        //     src: "icons/icon-384x384.png",
        //     sizes: "384x384",
        //     type: "image/png"
        //   },
        //   {
        //     src: "icons/icon-512x512.png",
        //     sizes: "512x512",
        //     type: "image/png"
        //   }
        // ]
      }
    },

    // Full list of options: https://v1.quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v1.quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://v1.quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: "packager", // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: "vue_gamify"
      },

      // More info: https://v1.quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      extendWebpack(/* cfg */) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      }
    }
  };
};
