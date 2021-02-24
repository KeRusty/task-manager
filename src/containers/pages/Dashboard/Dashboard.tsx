import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import UserHeader from "../../molecules/UserHeader";

export default function Dashboard() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <UserHeader name={"User"} />
      </ScrollView>
    </View>
  );
}
