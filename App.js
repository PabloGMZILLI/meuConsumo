import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Result from './src/pages/Result';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#D9CFF3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              title: 'Veja seu consumo',
            }
          }
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={
            { title: "Resultado" }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;