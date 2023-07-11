import React, { FC, useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { Factory, Image, Row, Box, Column, useDisclose, Text, useTheme } from "native-base"
import { NavigatorParamList } from "../../../navigators"
import { ImageBackground, Platform } from "react-native"
import { Images } from "./../../../../assets"

// Components
import { windowHeight, windowWidth } from "../../../components/modules/Screen/Screen"
import { useSafeAreaInsets } from "react-native-safe-area-context"
const NBImageBackground = Factory(ImageBackground)


export const LaunchScreen: FC<StackScreenProps<NavigatorParamList, "LaunchScreen">> = observer(
    ({ navigation }) => {
        const { isOpen, onOpen, onClose } = useDisclose()
        const theme = useTheme()
        const insets = useSafeAreaInsets()
        const [showAdditionalSplash, setShowAdditionalSplash] = useState<boolean>(
            Platform.OS == "ios" ? true : false
        )


        if (showAdditionalSplash) {
            return (
                <NBImageBackground
                    source={Images.splash_screen_english}
                    h={windowHeight}
                    w={windowWidth + insets.left + insets.right}
                >
                </NBImageBackground>
            )
        }
        return (
            <NBImageBackground
                source={Images.launching_screen_bg}
                h={windowHeight + insets.top + insets.bottom}
                w={windowWidth + insets.left + insets.right}
            >
                <Box h={"100%"} w={"100%"} justifyContent="space-between">
                    <Column flexGrow={5} justifyContent="center">
                        <Image
                            height={"210px"}
                            width={"146px"}
                            source={Images.batzawaj_logo}
                            alt="batzawaj_logo"
                            alignSelf="center"
                        />
                        <Text
                            marginTop="10"
                            textAlign="center"
                            color="white"
                        >
                            {"BATZAWAJ"}
                        </Text>
                    </Column>
                </Box>
            </NBImageBackground>
        )
    },
)
