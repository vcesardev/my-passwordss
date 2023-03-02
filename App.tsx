import { SafeAreaView, StatusBar } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { ThemeProvider } from "styled-components";
import { theme as themeData } from "./src/theme/index";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/hooks/auth";
import Router from "./src/routes";
import { PasswordProvider } from "./src/hooks/passwords";
import SafeKAV from "./src/components/SafeKAV";

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
          <PasswordProvider>
            <ThemeProvider theme={themeData}>
              <StatusBar
                style="light"
                backgroundColor={themeData.colors.purple}
              />
              <SafeAreaView style={{ flex: 0, backgroundColor: "#6548A3" }} />
              <SafeKAV>
                <Router />
              </SafeKAV>
            </ThemeProvider>
          </PasswordProvider>
        </AuthProvider>
      </NavigationContainer>
    );
  }
}
