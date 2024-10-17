import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import Swiper from "react-native-swiper";
//local imports
import { parameters, colors } from "../global/styles";



export default function WelcomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: "center", paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}>Get Your Burps Delivered</Text>
                <Text style={{ fontSize: 25, color: colors.buttons, fontWeight: "bold" }}>In Your Area</Text>
            </View>
            <View style={{ flex: 4, justifyContent: "center" }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: 'https://plus.unsplash.com/premium_photo-1695658864487-a5a9882c3626?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVlcnxlbnwwfHwwfHx8MA%3D%3D' }}
                            style={{ width: "100%", height: '100%' }}
                        />

                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1527169402691-feff5539e52c?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                            style={{ width: "100%", height: '100%' }}
                        />

                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: 'https://plus.unsplash.com/premium_photo-1679591002472-6383762fb31f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                            style={{ width: "100%", height: '100%' }}
                        />

                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1620219365994-f443a86ea626?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                            style={{ width: "100%", height: '100%' }}
                        />

                    </View>
                </Swiper>
            </View>
            <View style={{ flex: 4, justifyContent: "flex-end", marginHorizontal: 20 }}>
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Button
                        title={"SIGN IN"}
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => {
                            navigation.navigate('SignInScreen')

                        }}
                    />
                </View>
                <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
                    <Button
                        title={"Create an account"}
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={() => {
                            navigation.navigate('SignUpScreen')

                        }}

                    />
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({

    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#92bbd9'
    },
    createButton: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.buttons,
        height: 40,
        paddingHorizontal: 20,
    },
    createButtonTitle: {
        color: colors.grey1,
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3

    }


}
);