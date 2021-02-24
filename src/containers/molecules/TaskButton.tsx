import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function TaskButton({ text }: { text: any }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#800080",
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 20,
        margin: 10,
      }}
    >
      <Text style={{ fontWeight: "500", color: "#FFFFFF" }}>{text}</Text>
    </TouchableOpacity>
  );
}
