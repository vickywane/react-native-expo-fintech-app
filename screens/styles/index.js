import { StyleSheet } from 'react-native'

export const TextStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#2F1B1B"
    },
    smTitle: {
        fontSize: 20,
        paddingBottom: 5,
        fontWeight: "500",
        color: "#79889E"
    },
    text: {
        fontSize: 15,
        color: "#2F1B1B"
    }
})

export const ScreenStyles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export const darkTheme = {
    primary: "#121212",
    background: "#121212",
    text: "#F0E6E6",
    card: '#121212',
    shadow: "rgba(67, 79, 117, 0.25)",
    navigationTab: "#121212"
}

export const lightTheme = {
    primary: "rgba(255, 226, 205, 0.16)",
    background: "rgba(255, 226, 205, 0.16)",
    text: "#2F1B1B",
    card: '#fff',
    shadow: "rgba(67, 79, 117, 0.25)",
    navigationTab: "#fff"
}