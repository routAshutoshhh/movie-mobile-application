import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

// here  we would need to define  the typesccript interface first
interface searchProps {
  onPress: () => void;
  placeholder: string;
}

//we can either define a searchProps like interface or we can define a type for the typescript

type Props = {
  onPress: () => void;
  placeholder: string;
};
//we will get  the logic of router from the index page and  the logic also

export default function SearchBar({ onPress, placeholder }: searchProps) {
  return (
    <View className=" flex-row items-center  bg-dark-100 rounded-full py-4 px-5">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-3 text-white"
      />
    </View>
  );
}
