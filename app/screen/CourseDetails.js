import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../styles/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import CourseDetailSection from "../components/course-details/courseDetailSection";
import ChapterSection from "../components/course-details/chapterSection";

export default function CourseDetails() {
  const navigator = useNavigation();
  const route = useRoute();
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(typeof data?.course?.chapters);
    setData(route.params);
  }, [route]);
  return (
    <View style={{ padding: 10, backgroundColor: "#F3F1FF" }}>
      <TouchableOpacity onPress={() => navigator.goBack()}>
        <Ionicons
          style={styles.iconPadding}
          name="arrow-back-circle-outline"
          size={40}
          color="black"
        />
      </TouchableOpacity>
      <View style={styles.view1}>
        <CourseDetailSection course={data?.course} />
      </View>
      <View>
        <ChapterSection chapters={data?.course?.chapters} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconPadding: {
    padding: 5,
  },
  view1: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 10,
  },
});
