import {StyleSheet} from 'react-native';
import deviceH from '../helper/deviceH';

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
    backgroundColor: '#c0c7d1',
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
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceH.W(70),
    padding: 10,
    borderRadius: deviceH.W(35),
    marginTop: 30,
  },
  nextBT: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export {appStyle, splashStyle, welcomeStyle};
