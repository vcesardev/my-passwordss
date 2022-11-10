import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/App/Home";

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <App.Navigator screenOptions={screenOptions}>
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
};

export default AppRoutes;
