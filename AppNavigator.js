import { createStackNavigator } from "@react-navigation/stack";
import Home from "./page/Home";
import About from "./page/About";
import Map from "./page/Map";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
