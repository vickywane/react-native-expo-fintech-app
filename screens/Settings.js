import React, { useContext } from "react"
import { View, Text, Dimensions, Button } from 'react-native'
import { useTheme } from "./state/appContext"
import { ScreenStyles } from "./styles"
const { height } = Dimensions.get("screen")

const Settings = () => {
    const { colors, setScheme, isDark } = useTheme()

    return (
        <View style={[ScreenStyles.center, { height, backgroundColor: colors.background }]} >
            <Text style={{ color: colors.text }} > Display Mode: {isDark ? "Light" : "Dark"} </Text>

            <Button
                title={` Switch To ${isDark ? "Light" : "Dark"} Mode`}
                onPress={() => setScheme(isDark ? 'light' : 'dark')}
            />
        </View>
    )
}

export default Settings