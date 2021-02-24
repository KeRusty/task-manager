import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function UserImage() {
  return (
    <TouchableOpacity>
      <Image
        style={{ width: 40, height: 40 }}
        source={require("../../assets/user.jpg")}
      />
    </TouchableOpacity>
  );
}
