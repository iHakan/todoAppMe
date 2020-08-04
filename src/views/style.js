import {StyleSheet} from 'react-native';

const appStyle = StyleSheet.create({
  navContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
  },
});

const splashStyle = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {appStyle, splashStyle};
