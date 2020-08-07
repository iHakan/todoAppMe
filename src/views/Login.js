import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {welcomeStyle} from './style';
import {observer} from 'mobx-react';
import loginC from '../controllers/loginC';

class Login extends React.Component {
  render() {
    return (
      <View style={welcomeStyle.con}>
        <Text style={welcomeStyle.caption}>Sizi Bekliyorduk!</Text>
        <Text style={welcomeStyle.desc}>
          Lütfen kullanıcı adınızı ve şifrenizi giriniz
        </Text>

        <TextInput
          placeholder={'Kullanıcı Adınız'}
          style={welcomeStyle.input}
          value={loginC.isim}
          onChangeText={(d) => loginC.set('isim', d)}
        />
        <TextInput
          placeholder={'Şifreniz'}
          style={welcomeStyle.input}
          secureTextEntry={true}
          maxLength={8}
          keyboardType={'number-pad'}
          value={loginC.sifre}
          onChangeText={(d) => loginC.set('sifre', d)}
        />

        <TouchableOpacity style={welcomeStyle.nextB}>
          <Text style={welcomeStyle.nextBT}>Devam ET</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default observer(Login);
