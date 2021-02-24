import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";

export default function AddTaskButton({ text }: { text: string }) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F98B88",
        width: 60,
        height: 60,
        borderRadius: 30,
      }}
    >
      <Text style={{ fontSize: 40 }}>{text}</Text>
    </TouchableOpacity>
  );
}
