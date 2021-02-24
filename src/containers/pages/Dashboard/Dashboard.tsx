import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import UserHeader from "../../organisms/UserHeader";
import TaskButton from "../../atoms/TaskButton";

export default function Dashboard() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <UserHeader name={"User"} />

        <ScrollView
          horizontal
          contentContainerStyle={{ justifyContent: "space-between" }}
        >
          <TaskButton text="All Tasks" />
          <TaskButton text="Completed Tasks" />
          <TaskButton text="Pending Tasks" />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
