import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../../styles/Colors";
import { Ionicons } from "@expo/vector-icons";
export default function CourseItem({ item }) {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: Colors.WHITE,
        marginRight: 15,
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: item?.banner?.url }}
        style={{ width: 210, height: 120, borderRadius: 15 }}
      />
      <View style={{ marginTop: 18, marginLeft: 3 }}>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            paddingBottom: 5,
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Ionicons name="book-outline" size={24} color="black" />
            <Text>{item?.chapters?.length} chapters</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Ionicons name="md-time-outline" size={24} color="black" />
            <Text>{item?.time}Hr</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "outfit",
              paddingTop: 10,
            }}
          >
            {item?.price == 0 ? "Free" : item?.price}
          </Text>
        </View>
      </View>
    </View>
  );
}
