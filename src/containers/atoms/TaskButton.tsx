import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function TaskButton({
  text,
  active,
  onPress,
}: {
  text: string;
  selected?: boolean;
  onSelect?: any;
  active?: any;
  onPress?: any;
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#800080",
        paddingVertical: 30,
        paddingHorizontal: 25,
        width: 200,
        borderRadius: 20,
        marginVertical: 5,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ fontWeight: "500", color: "#FFFFFF", fontSize: 18 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
