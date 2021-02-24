import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function LandingPage({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontStyle: "normal", fontSize: 30, fontWeight: "700" }}>
        Organize your Tasks
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontStyle: "normal", fontSize: 15 }}>
          Lets Organize your Tasks and create a checklist of tasks
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#4267B2",
          paddingVertical: 14,
          paddingHorizontal: 80,
          marginTop: 130,
          borderRadius: 30,
        }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "600" }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
