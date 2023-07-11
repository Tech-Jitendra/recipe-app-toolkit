import React from "react"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { Box, Center, ScrollView } from "native-base"
import { Dimensions } from "react-native"

export const windowHeight = Dimensions.get("window").height
export const windowWidth = Dimensions.get("window").width
export const Screen = (props: {
    unsafeAreaColor: any
    scrollEnabled?: true | false
    [x: string | number | symbol]: unknown
}) => {
    return (
        <ScrollView bg={props.unsafeAreaColor} scrollEnabled={props.scrollEnabled}         >
            <SafeAreaView  >
                <Box
                    width={windowWidth}
                    height={windowHeight}
                    {...props}
                    alignItems={"flex-start"}
                >
                    {props.children}
                </Box>
            </SafeAreaView>
        </ScrollView>
    )
}
