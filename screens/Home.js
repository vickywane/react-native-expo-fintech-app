import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import BankCard from "./components/bankCard";
import Expenses from "./components/expenses";
import { TextStyles } from './styles/'
import { useTheme } from './state/appContext'

const Home = () => {
    const { colors, isDark } = useTheme()

    return (
        <View>
            <View style={[{ backgroundColor: colors.background, paddingVertical: 40 }, styles.container]}  >
                <View style={[styles.flexItems]}>
                    <View>
                        <Text style={TextStyles.smTitle} > Balance </Text>

                        <View style={styles.flexItems} >
                            <Image style={{ height: 30, width: 30 }} resizeMode="contain" source={require("./assets/naira-symbol.png")} />
                            <Text style={[TextStyles.title, { color: colors.text }]} > 634,905.12 </Text>
                        </View>
                    </View>

                    <Image
                        style={styles.avatar}
                        source={require("./assets/avatar.png")}
                    />
                </View>

                <View style={styles.sectionContainer} >
                    <BankCard />
                </View>
            </View>

            <View style={[styles.container, { backgroundColor: isDark ? colors.background : "white" }]} >
                <Expenses />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginVertical: 20
    },
    container: {
        // flex: 1,
        padding: 15
    },
    flexItems: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 20
    },
    cardContainer: {
        height: 200,
        width: 300,
        borderWidth: 2,
        borderColor: 'black'
    }
})

export default Home