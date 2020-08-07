import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {welcomeStyle} from './style';
import { observer } from 'mobx-react';

class Welcome extends React.Component {
  render() {
    return (
      <View style={welcomeStyle.con}>
         
        <Text style={welcomeStyle.caption}>Hoşgeldiniz!</Text>
        <Text style={welcomeStyle.desc}>Şerefler verdiniz efem...</Text>

        <TouchableOpacity style={welcomeStyle.nextB} onPress = {()=> this.props.navigation.navigate('Login')}>
          <Text style={welcomeStyle.nextBT}>Devam ET</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default observer(Welcome);
