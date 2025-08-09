import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View className=" flex-row items-center  bg-dark-100 rounded-full py-4 px-5">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={() => {}}
        placeholder="Search"
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-3 text-white"
      />
    </View>
  );
}
