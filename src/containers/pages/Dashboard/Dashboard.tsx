import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import UserHeader from "../../organisms/UserHeader";
import TaskButton from "../../atoms/TaskButton";
import AddTaskButton from "../../atoms/AddTaskButton";

export default function Dashboard({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ position: "absolute", top: 0, width: "100%" }}>
        <UserHeader name={"User"} />
      </View>

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TaskButton
          text="All Tasks"
          onPress={() => navigation.navigate("All Tasks")}
        />
        <TaskButton
          text="Completed Tasks"
          onPress={() => navigation.navigate("Completed Tasks")}
        />
        <TaskButton
          text="Pending Tasks"
          onPress={() => navigation.navigate("Pending Tasks")}
        />
      </ScrollView>

      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: 30,
        }}
      >
        <AddTaskButton text="+" />
      </View>
    </View>
  );
}
