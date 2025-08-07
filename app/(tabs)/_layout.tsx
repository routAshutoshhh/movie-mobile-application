import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground } from "react-native";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
            name = "index"
            options ={{
                title : "Home",
                headerShown :false,
                tabBarIcon : ({focused}) =>(
                    <>
                    <ImageBackground
                        source = {images.highlight}
                        className ="flex flex-row w-full flex-1 min-w-[112px]">
                        <Image source={require("@/assets/icons/home.png")}  tintColor ="#151312"  className = "size-5" />
                    </ImageBackground>  
                    </>
                )
            }}
            />

            <Tabs.Screen 
            name = "search"
            options ={{
                title : "Search-movies",
                headerShown : false,
            }}
            />

            <Tabs.Screen
            name = "bookmarking"
            options = {{
                title :"saved-movies",
                headerShown : false
            }}
            />

            <Tabs.Screen
            name = "profile"
            options ={{
                title : "account",
                headerShown : false
            }}
            />


        </Tabs>
    )
}

export default _Layout;