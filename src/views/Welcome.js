import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import {welcomeStyle} from './style';

class Welcome extends React.Component {
  render() {
    return (
      <View style={welcomeStyle.con}>
        <View>
          <Text style={welcomeStyle.caption}>Hoş Geldiniz!</Text>
          <Text style={welcomeStyle.desc}>Lorem ıpsum sit amet.....</Text>
        </View>

        <TouchableOpacity style={welcomeStyle.nextB}>
          <Text style={welcomeStyle.nextBT}>Devam Et</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default observer(Welcome);
