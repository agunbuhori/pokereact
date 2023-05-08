# Pokereact

This is a React Native app developed using version 0.71.6.

## Prerequisites

Before running the app, make sure you have the following prerequisites installed:

- Node.js
- React Native CLI
- Android SDK (for Android development)
- Xcode (for iOS development)

## Getting Started

Follow the steps below to get the app up and running:

1. Clone the repository:
   `git clone https://github.com/agunbuhori/pokereact.git`

2. Install dependencies:
   `cd pokereact` and then `npm install`
   and also don't forget to run `cd ios && pod install` or `npx pod-install`
3. Start the development server:
   `yarn start` or `npm start`

4. Run the app on Android or iOS:

- Android: Open a simulator or connect a physical device, then run:

  ```
  yarn android
  ```

  or using npm

  ```
  npm run android
  ```

- iOS: Open a simulator or connect a physical device, then run:

  ```
  yarn ios
  ```

  or using npm

  ```
  npm run ios
  ```

## Installed Libraries

This app utilizes the following libraries:

- [Redux Toolkit](https://redux-toolkit.js.org/): A library for efficient Redux development, providing simplified API and automatic handling of common Redux patterns. Thanks to Redux Toolkit for making state management easier.
- [Redux](https://redux.js.org/): A predictable state container for JavaScript apps, used for managing the global state of the app. Thanks to Redux for providing a robust state management solution.
- [Asyncstorage](https://react-native-async-storage.github.io/async-storage/): An asynchronous, unencrypted, persistent, key-value storage system for React Native, used for storing app data locally. Thanks to AsyncStorage for simplifying data storage in the app.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the Metro development server.
- `npm run android`: Builds the Android app and runs it on a connected device or emulator.
- `npm run ios`: Builds the iOS app and runs it on a simulator or connected device.
- `npm run test`: Runs the test suites.
