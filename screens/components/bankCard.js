import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TextStyles } from '../styles/'
import { obsfucateCardNumber } from "../../utils";

const { width } = Dimensions.get('screen')

const BankCard = () => {
    return (
        <View style={styles.center} >
            <LinearGradient
                locations={[0.010, 0.9]}
                start={[0, 0]} end={[1, 0]}
                colors={['#FFE2CD', '#30416C']}
                style={[styles.cardContainer, styles.columnFlex]}
            >
                <View style={styles.rowFlex}>
                    <Text style={[TextStyles.smTitle, {color: "#fff"}]} > Lekan Aleshinloye </Text>

                    <Image style={{ height: 45, width: 45 }} resizeMode="contain" source={require("../assets/card-sprite.png")} />
                </View>

                <View>
                    <View style={[{ marginBottom: 20 }, styles.rowFlex]} >
                        <Image style={styles.cardAsset} resizeMode="contain" source={require("../assets/card-chip.png")} />

                        <Text style={{ color: "white" }} > 06/2023 </Text>
                    </View>

                    <View style={styles.rowFlex} >
                        <Text style={TextStyles.text} > {obsfucateCardNumber("4001 0000 0000 6864")} </Text>

                        <Image style={styles.cardAsset} resizeMode="contain" source={require("../assets/visa.png")} />
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    cardAsset: {
        height: 60,
        width: 60
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowFlex: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    columnFlex: {
        flexDirection: "column",
        justifyContent: "space-between"
    },
    cardContainer: {
        padding: 20,
        height: 200,
        width: width - 50,
        borderRadius: 20,
        backgroundColor: "red",
    }
})

export default BankCard