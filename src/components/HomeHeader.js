import React from 'react'
import { Icon, withBadge } from 'react-native-elements'
import { StyleSheet, View, Text } from 'react-native'
import { colors, parameters } from '../global/styles'


function HomeHeader({ navigation }) {
    const BadgeIcon = withBadge(0)(Icon);
    return (
        <View style={styles.header}>
            <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }} >
                <Icon
                    type='material-community'
                    name='menu'
                    color={colors.cardBackground}
                    size={32}
                />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: colors.cardBackground, fontSize: 25, fontWeight: "bold" }}>
                    Burps
                </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={32}
                    color={colors.cardBackground}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        paddingVertical: 10,
        justifyContent: "space-between"

    },

})

export default HomeHeader