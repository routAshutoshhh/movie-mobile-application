import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

//here i am defining aa repitive funcitonal component- this componennt will alwasy start with a capital letter as we are using it as component
//since we are making a funciotnal reusable compoent- we are creating the TabIcon component so that we can use it later on  we will use props to pass here so that i can use this everywhere
const TabIcon = ({focussed, icon , title} : any )=>{
    //if the icon is focussed state then we need to return  this else we dont need to return that
    if (focussed){
        return (
            <ImageBackground
                source = {images.highlight}
                    className ="flex flex-row w-full min-w-[102px]  min-h-[50px] mt-3 justify-center  items-center rounded-full overflow-hidden ">
                    <Image source={icon}  tintColor ="#151312"  className = "size-6 " />
                    <Text className="text-secondary text-sm ml-2 font-semibold">{title}</Text>
            </ImageBackground>  
        )
    }
    else{
        return (
            <View className = "size-full justify-center items-center mt-3 rounded-full">
                <Image source = {icon} tintColor ="#A8B5DB"/>
            </View>
        )
    }
}
           

const _Layout = () => {

    return (
        /**here i amn coding the tabs in the bottom so that i can see  and move through different tabs
         *
         *
         * each <Tab> is  used for navigation and is imported from expo router  with providing a tabs.screen in  it to use to define  the tabs icons and all
         * 
         */
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor : "#0f0D23",
                    borderRadius : 70,
                    height: 50,
                    marginBottom : 30,
                    marginHorizontal : 5 ,
                    position : "absolute",
                    overflow : "hidden"
                },
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: "center",
                    alignItems: "center"
                }
            }}
        >
            <Tabs.Screen
            name = "index"
            options ={{
                title : "Home",
                headerShown :false,
                tabBarIcon : ({focused}) =>(
                   <TabIcon 
                   focussed = {focused}
                   icon = {icons.home}
                   title = "Home"
                   />
                )
            }}
            />

            <Tabs.Screen 
            name = "search"
            options ={{
                title : "Search-movies",
                headerShown : false,
                    tabBarIcon : ({focused}) =>(
                   <TabIcon 
                   focussed = {focused}
                   icon = {icons.search}
                   title = "Search"
                   />
                )
            }}
            />

            <Tabs.Screen
            name = "bookmarking"
            options = {{
                title :"saved-movies",
                headerShown : false,
                tabBarIcon : ({focused}) =>(
                   <TabIcon 
                   focussed = {focused}
                   icon = {icons.save}
                   title = "Saved"
                   />
                )
            }}
            />

            <Tabs.Screen
            name = "profile"
            options ={{
                title : "account",
                headerShown : false,
                tabBarIcon : ({focused}) =>(
                   <TabIcon 
                   focussed = {focused}
                   icon = {icons.person}
                   title = "Account"
                   />
                )
            }}
            />


        </Tabs>
    )
}

export default _Layout;