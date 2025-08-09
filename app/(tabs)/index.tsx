import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1  bg-primary ">
      <Image source={images.bg} className="absolute w-full z-0 " />

      <ScrollView
        className="flex-1 px-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
      >
        <Image
          source={icons.logo1}
          className="border border-red-900 w-12 h-10 mt-10 mb-5 mx-auto "
        />
      </ScrollView>
      {/**here is the search bar component we will be rendering */}
      <View className="flex-1 mt-5">
        <SearchBar />
      </View>
    </View>
  );
}
