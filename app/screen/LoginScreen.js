import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
//
import appImg from "../../assets/images/app.png";
import Colors from "../../styles/Colors";
import googleImg from "../../assets/images/Google.png";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View
      style={{ display: "flex", alignItems: "center", width: "100%", flex: 1 }}
    >
      <Image
        source={appImg}
        style={{ width: 250, height: 500, objectFit: "contain", marginTop: 70 }}
      />
      <View
        style={{
          display: "flex",
          flex: 1,
          height: 400,
          backgroundColor: Colors.PRIMARY,
          marginTop: -50,
          padding: 20,
          width: "100%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            color: Colors.WHITE,
            fontFamily: "outfit-bold",
            marginTop: 20,
          }}
        >
          CODEBOX
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            marginTop: 20,
            color: Colors.LIGHT_PRIMARY,
            fontFamily: "outfit",
          }}
        >
          Your Ultimate Programming Learning Box
        </Text>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: Colors.WHITE,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
            padding: 10,
            borderRadius: 99,
            marginTop: 25,
          }}
        >
          <Image source={googleImg} height={40} width={40} />
          <Text
            style={{
              fontSize: 16,
              color: Colors.PRIMARY,
              fontFamily: "outfit",
            }}
          >
            Sign In with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
