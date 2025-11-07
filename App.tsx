import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Importar telas
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DicasScreen from './screens/DicasScreen';
import FormScreen from './screens/FormScreen';
import ApiScreen from './screens/ApiScreen';
import DevsScreen from './screens/DevsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            // Transição padrão: Slide da direita (iOS style)
            ...TransitionPresets.SlideFromRightIOS,
            headerStyle: {
              backgroundColor: '#4CAF50',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ 
              headerShown: false 
            }}
          />
          
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
              title: 'EcoConsciente',
              headerLeft: () => null, // Remove botão voltar
            }}
          />
          
          <Stack.Screen 
            name="Dicas" 
            component={DicasScreen}
            options={{ 
              title: 'Dicas Sustentáveis',
              // Transição modal de baixo para cima
              ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
          />
          
          <Stack.Screen 
            name="Form" 
            component={FormScreen}
            options={{ 
              title: 'Calculadora Ecológica'
            }}
          />
          
          <Stack.Screen 
            name="Api" 
            component={ApiScreen}
            options={{ 
              title: 'Qualidade do Ar'
            }}
          />
          
          <Stack.Screen 
            name="Devs" 
            component={DevsScreen}
            options={{ 
              title: 'Sobre os Desenvolvedores',
              // Fade transition
              cardStyleInterpolator: ({ current }) => ({
                cardStyle: {
                  opacity: current.progress,
                },
              }),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
