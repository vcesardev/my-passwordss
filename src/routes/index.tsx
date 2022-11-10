import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useAuth } from "../hooks/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Stack = createStackNavigator();

const Router = (): JSX.Element => {
  const { user } = useAuth();

  const hasUser = user.id;

  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {hasUser ? (
        <Stack.Screen name="AppRoutes" component={AppRoutes} />
      ) : (
        <>
          <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;
