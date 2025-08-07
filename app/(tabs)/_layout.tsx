import { Tabs } from "expo-router";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
            name = "index"
            options ={{
                title : "Home",
                headerShown :false,
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
        </Tabs>
    )
}

export default _Layout;