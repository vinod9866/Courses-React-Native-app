import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { getCourseList } from "../../services";
import { useEffect } from "react";
import SubHeading from "../subHeading";
import CourseItem from "./CourseItem";
import { useNavigation } from "@react-navigation/native";

export default function CourseList({ level, title }) {
  const navigator = useNavigation();
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(level).then((resp) => {
      setCourseList(resp?.courses);
    });
  };
  return (
    <View style={{ margin: 18 }}>
      <SubHeading text={title} color={level === "Basic" ? "white" : "black"} />
      <FlatList
        data={courseList}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigator.navigate("course-detail", {
                  course: item,
                })
              }
            >
              <CourseItem item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
