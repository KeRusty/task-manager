import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function TaskButton({
  text,
  selected,
  onSelect,
}: {
  text: string;
  selected?: boolean;
  onSelect?: any;
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: selected ? "#800080" : "#D3D3D3",
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 5,
      }}
    >
      <Text style={{ fontWeight: "500", color: "#FFFFFF" }}>{text}</Text>
    </TouchableOpacity>
  );
}
