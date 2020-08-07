import {StyleSheet} from 'react-native';
import {deviceH} from '../helper/deviceH.js';

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

const welcomeStyle = StyleSheet.create({
  con: {
    flex: 1,
    borderColor: '#c0c7d1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
    color: 'black',
  },
  desc: {
    fontWeight: 'bold',
    color: 'gray',
  },
  nextB: {
    backgroundColor: '#087dd1',
    width: deviceH.W(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    padding: 10,
    marginTop: 20,
  },
  nextBT: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
export {appStyle, splashStyle, welcomeStyle};
