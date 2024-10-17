import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Icon, Button } from 'react-native-elements';


// local imports
import Header from '../components/Header'
import { colors, parameters, title } from "../global/styles";


export default function SignUpScreen({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <Header title={"My Account"} type={"arrow-left"} navigation={navigation} />
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title}>
                    Sign-Up
                </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={styles.text1}>
                    Register with Email
                </Text>
                <View style={{ marginTop: 10 }} />
                <Text style={styles.text1}>
                    Please Enter the Email, Phone & Password for Signing-Up.
                </Text>
            </View>
            <View style={styles.textInput1}>
                <Animatable.View>
                    <Icon
                        name='email'
                        iconStyle={{ color: colors.grey3 }}
                        type='material'
                    />
                </Animatable.View>
                <TextInput
                    placeholder='Email...'
                    style={{ borderRadius: 12, width: "80%" }}
                />

            </View>
            <View style={styles.textInput1}>
                <Animatable.View>
                    <Icon
                        name='phone'
                        iconStyle={{ color: colors.grey3 }}
                        type='material'
                    />
                </Animatable.View>
                <TextInput
                    placeholder='Phone No...'
                    keyboardType='phone-pad'
                    style={{ borderRadius: 12, width: "80%" }}
                />

            </View>
            <View style={styles.textInput1}>
                <Animatable.View>
                    <Icon
                        name='lock'
                        iconStyle={{ color: colors.grey3 }}
                        type='material'
                    />
                </Animatable.View>
                <TextInput
                    placeholder='Password...'
                    style={{ borderRadius: 12, width: "80%" }}
                />

            </View>
            <View style={styles.textInput1}>
                <Animatable.View>
                    <Icon
                        name='lock'
                        iconStyle={{ color: colors.grey3 }}
                        type='material'
                    />
                </Animatable.View>
                <TextInput
                    placeholder='Confirm Password...'
                    style={{ borderRadius: 12, width: "80%" }}
                />

            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
                <Button
                    title={"SIGN UP"}
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                />
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    text1: {
        color: colors.grey4,
        fontSize: 16

    },
    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 15,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center"
    },
})

