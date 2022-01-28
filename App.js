import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Entypo, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import { ApplicationDarkTheme, ApplicationLightTheme } from './screens/styles/'
import Filter from './screens/Filter'
import Transactions from './screens/Transactions'
import Settings from './screens/Settings'
// import { AppProvider } from './screens/state/appContext';
import { AppearanceProvider } from 'react-native-appearance'
import { CustomThemeProvider, useTheme } from './screens/state/appContext'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  const { colors } = useTheme()

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: colors.navigationTab, height : 70, paddingTop: 10 }, headerShown: false, tabBarActiveTintColor: '#866dbb', tabBarShowLabel: false }} >
        <Tab.Screen options={{ tabBarIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} /> }} name="Home" component={Home} />
        <Tab.Screen options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ transform: [{ rotate: '90deg' }] }} >
              <Octicons name="settings" size={size} color={color} />
            </View>
          )
        }}
          name="Filter"
          component={Filter}
        />
        <Tab.Screen options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="bank" size={size} color={color} /> }} name="Transactions" component={Transactions} />
        <Tab.Screen options={{ tabBarIcon: ({ color, size }) => <Ionicons name="settings-sharp" size={size} color={color} /> }} name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} >
        <StatusBar style="dark" />
        <AppearanceProvider>
          <CustomThemeProvider>
            <Navigator />
          </CustomThemeProvider>
        </AppearanceProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}