import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from "./AuthNavigation";


export default function RootNavigation() {
    return (
        <NavigationContainer>
            <AuthNav />
        </NavigationContainer>
    )
}