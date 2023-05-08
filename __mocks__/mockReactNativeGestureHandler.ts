/* eslint-disable no-undef */
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    TouchableOpacity: View,
    TouchableHighlight: View,
    TouchableWithoutFeedback: View,
    ScrollView: View,
    FlatList: View,
    // Add any other components used from react-native-gesture-handler
  };
});