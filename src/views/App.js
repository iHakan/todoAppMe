import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './Splash';
import {appStyle} from './style';
import appC from '../controllers/appC';

const Stack = createStackNavigator();

class App extends React.Component {
  componentDidMount() {
    appC.splashKapat();
  }

  navigasyon() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'Splash'} component={Splash} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  render() {
    if (appC.splashRender) return <Splash />;

    //alert(appC.splashRender.toString());
    return (
      <>
        <View>
          <Text>HEADER</Text>
        </View>

        <View style={appStyle.navContainer}>{this.navigasyon()}</View>

        <View>
          <Text>FOOTER</Text>
        </View>
      </>
    );
  }
}

export default observer(App);
