import React from 'react'
import { ScrollView, View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from "react-native"
import { TextStyles } from '../styles/'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../state/appContext';

const dummyData = [
    {
        title: "PayStack Invoice",
        date: "January 10, 2022",
        amount: 90000,
        img_uri: require("../assets/Paystack.png")
    },
    {
        title: "Barter by Flutterwave",
        date: "January 8, 2022",
        amount: 320000,
        img_uri: require("../assets/flutterwave.png")
    }
]

const { width } = Dimensions.get('screen')

/**
 * 
 * @param {Number} amt 
 * @returns String
 */

const getAmountColor = amt => {
    if (amt < 100000) {
        return "red"
    }

    return "green"
}

const Expenses = () => {
    const { colors } = useTheme()

    return (
        <View >
            <View style={[styles.center, { transform: [{ translateY: - 40 }] }]}>
                <TouchableOpacity>
                    <View style={[styles.visibilityCircle, styles.center, { shadowColor : colors.shadow }]} >
                        <FontAwesome name="chevron-down" size={24} color="#B2A6A9" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 30 }} >
                <View style={[{ marginBottom: 10 }, styles.rowFlex]} >
                    <Text style={TextStyles.smTitle} > Expenses </Text>

                    <TouchableOpacity>
                        <Ionicons name="filter-outline" size={24} color="#B2A6A9" />
                    </TouchableOpacity>
                </View>

                <Text style={[TextStyles.text, { color : colors.text }]} > Wallet allows you to track all transaction history </Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >
                {dummyData.map(({ title, date, amount, img_uri }, index) => (
                    <View key={index} style={[styles.expenseCard, { backgroundColor: colors.card, shadowColor: colors.shadow }]} >
                        <View style={[styles.rowFlex, { marginHorizontal: 10, height: 100 }]} >
                            <View style={styles.center}>
                                <Image style={{ height: 45, width: 45 }} resizeMode="contain" source={img_uri} />
                            </View>

                            <View style={styles.center} >
                                <View>
                                    <Text style={TextStyles.smTitle} > {title} </Text>
                                    <Text style={[TextStyles.text, { marginVertical: 5, color: colors.text }]} > {date} </Text>
                                    <Text style={[TextStyles.text, { color: getAmountColor(amount) }]}> {amount} </Text>
                                </View>
                            </View>

                            <View style={styles.center}>
                                <FontAwesome name="chevron-right" size={24} color="#B2A6A9" />
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const shadow = {
    shadowOffset: {
        width: 2,
        height: 6,
    },
    shadowOpacity: 0.80,
    shadowRadius: 7.65,
    elevation: 8,
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    visibilityCircle: {
        borderRadius: 50,
        height: 50,
        color: "#CCCCCC",
        width: 50,
        backgroundColor: "#fff",
        ...shadow
    },
    expenseCard: {
        borderRadius: 3,
        width: width - 50,
        marginVertical: 10,
        marginHorizontal: 5,
        // backgroundColor: "#fff",
        ...shadow
    },
    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Expenses