## Getting Started

Just a small documentation here

## Machine Setup

If you're new to react / react native, you will need to setup you're environment for both iOS
and Android. Visit https://reactnative.dev/docs/environment-setup and click
"React Native CLI Quickstart".

Then select your OS, and follow the instructions for both iOS and Android.
Installing all the proper dependancies and following the setup guide until you
initilize a starter project, which is not needed.

After you follow Machine setup, you can proceed to install the dependancies with
yarn and then build for iOS or Android.

## Installing (with expo)

```
yarn
```

```
yarn start
```

or

```
expo start
```

```
then type in a in your terminal once the runner finishes if you do not have Expo Go installed, this will boot up any simulator you have installed on your device
```

```
If you have Expo Go on your device just scan the QR code in the terminal and viola you are up and running
```

## Installing (After ejecting expo)

```
yarn
```

```
cd ios && pod install
```

```
yarn run ios
```

```
yarn run android
```

## Testing

```
yarn run test
```

or

```
yarn run test:watch
```

or (if you have detox cli setup)

```
detox test
```
## Development

IOS
```
react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios' --assets-dest='./ios'
```

Android
```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```