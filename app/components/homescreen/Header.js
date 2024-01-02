import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../../styles/Colors";
import coinImg from "../../../assets/images/Coin.png";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
      <View style={{paddingTop:25}}>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: user?.imageUrl }}
              style={{ width: 50, height: 50, borderRadius: 99 }}
            />
            <View style={{ maxWidth: "65%", paddingRight: 10 }}>
              <Text style={{ color: Colors.WHITE, fontFamily: "outfit" }}>
                Welcome,
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  color: Colors.WHITE,
                  fontFamily: "outfit-medium",
                  fontSize: 20,
                }}
              >
                {user?.fullName}
              </Text>
            </View>
            <View
              style={{
                marginLeft: "auto",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={coinImg} style={{ height: 40, width: 40 }} />
              <Text
                style={{
                  color: Colors.WHITE,
                  fontFamily: "outfit-bold",
                  fontSize: 16,
                }}
              >
                1300
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 99,
            marginTop: 20,
            justifyContent: "space-between",
            paddingRight:5
          }}
        >
          <TextInput
            placeholder="Search Courses"
            style={{ fontFamily: "outfit", paddingLeft: 50, fontSize: 18 }}
          />
          <Ionicons name="search-circle" size={50} color="#65CFF2" />
        </View>
      </View>
    )
  );
}
