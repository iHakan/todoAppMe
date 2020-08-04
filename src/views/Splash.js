import React from 'react';
import {View, Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';
import {splashStyle} from './style';

class Splash extends React.Component {
  render() {
    return (
      <View style={splashStyle.imageContainer}>
        <Image
          source={require('../../assets/images/todo2.png')}
          width={Dimensions.get('window').width * 0.6}
        />
      </View>
    );
  }
}

export default Splash;
