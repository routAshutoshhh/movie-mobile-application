import { images } from "@/constants/images";
import React from "react";
import { Image, View } from "react-native";
export default function Profile() {
  return (
    <View className="flex-1  bg-primary">
      <Image source={images.bg} />
    </View>
  );
}
