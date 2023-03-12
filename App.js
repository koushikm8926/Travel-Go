import { Text, View  } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Discover from './screens/Discover';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <TailwindProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Discover'>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Discover" component={Discover} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
   </TailwindProvider>
  );
}
