import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {welcomeStyle} from './style';
import { observer } from 'mobx-react';

class Welcome extends React.Component {
  render() {
    return (
      <View style={welcomeStyle.con}>
         
          <Text style={welcomeStyle.caption}>Hoş Geldiniz!</Text>
          <Text style={welcomeStyle.desc}>Şerefler verdiniz efem...</Text>
        

        <TouchableOpacity style={welcomeStyle.nextB}>
          <Text style={welcomeStyle.nextBT}>Devam ET</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default observer(Welcome);
