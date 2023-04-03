import 'react-native-gesture-handler';
import React from 'react';
//navegar entre telas do aplicativo 
import { NavigationContainer } from '@react-navigation/native';
//navegar utilizando o conceito de pilha 
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './components/TelaPrincipal/telaprincipal';
import Login from './components/Login/login';

 

const Stack = createStackNavigator();

 

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TelaPrincipal}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

 

export default App;