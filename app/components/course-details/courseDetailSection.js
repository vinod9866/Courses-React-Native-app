import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../styles/Colors";

export default function courseDetailSection({ course }) {
  console.log(course);
  return (
    <View>
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get("screen").width * 0.9,
          height: 190,
          borderRadius: 15,
          marginTop: 20,
        }}
      />
      <View style={styles.flexer}>
        <Text style={styles.name}>{course?.name}</Text>
        <Text style={styles.price}>
          {course?.price == 0 ? "Free" : course?.price}
        </Text>
      </View>
      <View style={styles.layout}>
        <View style={styles.icons}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="black"
          />
          <Text>{course?.author}</Text>
        </View>
        <View style={styles.icons}>
          <Ionicons name="md-time-outline" size={24} color="black" />
          <Text>{course?.time}Hr</Text>
        </View>
      </View>

      <View style={styles.layout}>
        <View style={styles.icons}>
          <Ionicons name="book-outline" size={24} color="black" />
          <Text>{course?.chapters?.length} chapters</Text>
        </View>
        <View style={[styles.icons, styles.special]}>
          <Ionicons name="cellular-outline" size={24} color="black" />
          <Text>{course?.level}</Text>
        </View>
      </View>

      <View style={{ paddingTop: 8 }}>
        <Text style={styles.name}>Description</Text>
        <Text style={{ paddingLeft: 10, fontFamily: "outfit", color: "grey" }}>
          {course?.description?.markdown}
        </Text>
      </View>

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#6857E8" }]}>
          <Text
            style={{ color: Colors.WHITE, fontFamily: "outfit", fontSize: 14 }}
          >
            Enroll For Free
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#03A9FF", width: "55%" }]}
        >
          <Text
            style={{ color: Colors.WHITE, fontFamily: "outfit", fontSize: 14 }}
          >
            Membership $1.99/Mon
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 18,
  },
  name: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    paddingLeft: 10,
  },
  price: {
    fontSize: 16,
    fontFamily: "outfit-medium",
    color: "#FFD705",
  },
  icons: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  layout: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  special: {
    paddingRight: 8,
  },
  btn: {
    padding: 12,
    borderRadius: 10,
    width: "40%",
    height: 43,
    alignItems: "center",
  },
});
