import React from "react";
import { View, Text } from "react-native";
import Header from "../components/homescreen/Header";
import Colors from "../../styles/Colors";
import CourseList from "../components/homescreen/CourseList";

export default function HomeScreen() {
  return (
    <View>
      <View
        style={{ backgroundColor: Colors.PRIMARY, height: 250, padding: 20 }}
      >
        <Header />
      </View>
      <View style={{ marginTop: -80, marginBottom: 60 }}>
        <CourseList level={"Basic"} title={"Basic Courses"} />
      </View>
      <View style={{ marginTop: -80 }}>
        <CourseList level={"Advanced"} title={"Advanced Courses"} />
      </View>
    </View>
  );
}
