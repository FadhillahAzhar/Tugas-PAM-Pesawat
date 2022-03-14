import * as React from 'react';
import Search from './component/Search';
import Hasilsearch from './component/Hasilsearch';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search' >
        <Stack.Screen name="Home" component={Search} />
        <Stack.Screen name="Hasilsearch" component={Hasilsearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;