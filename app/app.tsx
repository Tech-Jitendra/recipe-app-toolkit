import "./i18n"
import "./utils/ignore-warnings"
import React from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { AppNavigator, navigationRef, useNavigationPersistence } from "./navigators"
import { Provider } from 'react-redux';
import { NativeBaseProvider, extendTheme, ColorMode, useTheme } from "native-base"
import type { StorageManager } from "native-base"

import * as storage from "./utils/mobile-storage"
import { StatusBar } from "expo-status-bar"
import store from "./store"


export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"
const theme = useTheme()
const colorModeManager: StorageManager = {
    get: async () => {
        try {
            let val = await storage.getItem("@my-app-color-mode")
            return val === "dark" ? "dark" : "light"
        } catch (e) {
            console.log(e)
            return "light"
        }
    },
    set: async (value: ColorMode) => {
        try {
            await storage.setItem("@my-app-color-mode", value)
        } catch (e) {
            console.log(e)
        }
    },
}
const config = {
    dependencies: {
        "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
}

function App() {

    storage.removeItem(NAVIGATION_PERSISTENCE_KEY)

    const {
        initialNavigationState,
        onNavigationStateChange,
        isRestored: isNavigationStateRestored,
    } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

    return (
        <Provider store={store}>
            <StatusBar translucent={true} />
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <NativeBaseProvider
                    theme={theme}
                    colorModeManager={colorModeManager}
                    config={config}
                >
                    <AppNavigator
                        initialState={initialNavigationState}
                        onStateChange={onNavigationStateChange}
                    />
                </NativeBaseProvider>
            </SafeAreaProvider>
        </Provider>
    )
}

export default App
