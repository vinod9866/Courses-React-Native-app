import { Text, View } from "react-native";
import React, { Component } from "react";
import Colors from "../../styles/Colors";

export default function SubHeading({ text, color }) {
  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 24,
          color: color,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
