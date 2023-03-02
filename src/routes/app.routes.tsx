import { createStackNavigator } from "@react-navigation/stack";
import AddPassword from "../pages/App/AddPassword";
import Home from "../pages/App/Home";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <AppStack.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="AddPassword" component={AddPassword} />
    </AppStack.Navigator>
  );
};

export { AppRoutes };
