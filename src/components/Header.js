import React from 'react'
import { Icon } from 'react-native-elements'
import { StyleSheet, View, Text } from 'react-native'
import { colors, parameters } from '../global/styles'


function Header({ title, type, navigation }) {
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>
                <Icon
                    type='material-community'
                    name={type}
                    color={colors.headerText}
                    size={28}
                    onPress={() => {
                        navigation.goBack()

                    }}
                />
            </View>
            <View>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        paddingVertical: 10
    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",



    }
})

export default Header