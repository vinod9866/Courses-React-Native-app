import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
//import below for fonts setup
import { useFonts } from "expo-font";
import LoginScreen from "./app/screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/navigation/TabNavigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  // 3 Add this hook to your component:
  const [loaded] = useFonts({
    // make sure path is correct
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });

  return (
    <ClerkProvider
      publishableKey={"pk_test_dXNlZnVsLW1vb3NlLTY0LmNsZXJrLmFjY291bnRzLmRldiQ"}
    >
      <SafeAreaView style={styles.container1}>
        <StatusBar />
        <View style={styles.container}>
          <SignedIn>
            <NavigationContainer>
              <TabNavigator />
            </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <LoginScreen />
          </SignedOut>
        </View>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
});
