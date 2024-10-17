import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import HomeHeader from "../components/HomeHeader";

export default function HomeScreen() {
    const [delivery, setDelivery] = useState(true);
    return (
        <View>
            <HomeHeader />
            <View>
                <TouchableOpacity>
                    {/* <View style={ backgroundColor:}>

                    </View> */}
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})