import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { ThemeProvider } from "styled-components";
import { theme as themeData } from "./src/theme/index";
import { NavigationContainer } from "@react-navigation/native";
import PageHeader from "./src/components/PageHeader";
import Home from "./src/pages/App/Home";
import Login from "./src/pages/Auth/Login";
import { AuthProvider, useAuth } from "./src/hooks/auth";
import Router from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <AuthProvider>
          <ThemeProvider theme={themeData}>
            <StatusBar
              style="light"
              backgroundColor={themeData.colors.purple}
            />

            <Router />
          </ThemeProvider>
        </AuthProvider>
      </NavigationContainer>
    );
  }
}
