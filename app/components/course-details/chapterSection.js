import { View, Text } from "react-native";
import React from "react";

export default function ChapterSection({ chapters }) {
  console.log(chapters);

  return (
    <View>
      {chapters &&
        chapters.map((item, index) => {
          return (
            <View>
              <Text>{index + 1}</Text>
            </View>
          );
        })}
    </View>
  );
}
