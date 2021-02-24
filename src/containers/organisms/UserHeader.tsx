import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import UserImage from "../atoms/UserImage";

export default function UserHeader({ name }: { name: string }) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ paddingLeft: 20 }}>
        <Text>{`Hello ${name}`}</Text>
      </View>

      <View style={{ paddingRight: 20 }}>
        <UserImage />
      </View>
    </View>
  );
}
