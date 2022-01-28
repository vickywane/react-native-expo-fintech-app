import React from "react"
import { View, Text, Dimensions, Button } from 'react-native'
import { useTheme } from "./state/appContext"
import { ScreenStyles } from "./styles"
const { height } = Dimensions.get("screen")

const Filter = () => {
    const { colors } = useTheme()

    return (
        <View style={[ScreenStyles.center, { height, backgroundColor: colors.background }]} >
            <Text style={{ color: colors.text }} > Filter Screen </Text>
        </View>
    )
}

export default Filter