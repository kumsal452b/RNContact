import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from "./HomeNavigator";

const DrawerNavigator = () => {
    const DrawerStack = createDrawerNavigator();
    return (
        <DrawerStack.DrawerNavigator>
            <DrawerStack.Screen name="Home" component={HomeNavigator} />
        </DrawerStack.DrawerNavigator>
    )
}
export default DrawerNavigator;