import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Button, Icon, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
//local imports
import { colors, parameters, title } from "../global/styles";
import Header from "../components/Header";
import { SignInScreenContent } from "../global/content";

//Default function
export default function SignInScreen({ navigation }) {
    const [textInput2Focused, setTextInput2Focused] = useState(false);
    const textInput1 = useRef(1);
    const textInput2 = useRef(1);

    return (
        <View style={styles.container}>
            <Header title={SignInScreenContent.headerTitle} type={SignInScreenContent.headerArrow} navigation={navigation} />
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title}>
                    {SignInScreenContent.title}
                </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={styles.text1}>
                    {SignInScreenContent.topText1}
                </Text>
                <Text style={styles.text1}>
                    {SignInScreenContent.topText2}
                </Text>
            </View>
            <View>
                <View style={styles.textInput1}>
                    <Animatable.View animation="fadeIn">
                        <Icon
                            name="email"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"
                        />
                    </Animatable.View>
                    <TextInput
                        placeholder="Email..."
                        style={{ borderRadius: 12, width: "80%" }}
                        ref={textInput1}
                    />
                </View>
                <View style={styles.textInput2}>
                    <Animatable.View animation="fadeIn">
                        <Icon
                            name="lock"
                            iconStyle={{ color: colors.grey3 }}
                            type="material-community"
                        />
                    </Animatable.View>
                    <TextInput
                        placeholder="Password"
                        style={{ width: "80%" }}
                        ref={textInput2}
                        onFocus={() => setTextInput2Focused(true)}
                        onBlur={() => setTextInput2Focused(false)}
                    />
                    {/* Apply animation only when the input is focused */}
                    {textInput2Focused && (
                        <Animatable.View animation="fadeInLeft" duration={400}>
                            <Icon
                                name="visibility-off"
                                iconStyle={{ color: colors.grey3 }}
                                type="material"
                                style={{ marginRight: 10 }}
                            />
                        </Animatable.View>
                    )}
                </View>
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
                <Button
                    title={"SIGN IN"}
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                />
            </View>
            <View style={{ alignItems: "center", marginTop: 15 }}>
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>Forget Password ?</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 15, marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <SocialIcon
                    title="Sign In With Google"
                    button={true}
                    type="google"
                    style={styles.socialIcon}
                    onPress={() => { }}
                />
            </View>
            <View style={{ marginLeft: 30, marginTop: 25 }}>
                <Text>
                    New on Burps?
                </Text>
            </View>
            <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
                <Button
                    title={"Create an account"}
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: colors.grey4,
        fontSize: 16,
    },
    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
    },
    textInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15,
    },
    socialIcon: {
        borderRadius: 12,
        height: 50,
    },
    createButton: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 40,
        paddingHorizontal: 20,
    },
    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3,
    },
});
