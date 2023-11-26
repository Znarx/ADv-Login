import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            title: "Sign In",
            headerTitleAlign: "center", // Center the title
            headerStyle: {
              backgroundColor: "orange", // Set the background color
            },
            headerTintColor: "black", // Set the text color
          }}

          
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          leftButton={null}
          options={{
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
