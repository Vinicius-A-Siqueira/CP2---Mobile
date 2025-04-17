import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DicasScreen from './screens/DicasScreen';
import FormScreen from './screens/FormScreen';
import ApiScreen from './screens/ApiScreen';
import DevsScreen from './screens/DevsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dicas" component={DicasScreen} />
        <Stack.Screen name="Formulário" component={FormScreen} />
        <Stack.Screen name="Qualidade do Ar" component={ApiScreen} />
        <Stack.Screen name="Desenvolvedores" component={DevsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
