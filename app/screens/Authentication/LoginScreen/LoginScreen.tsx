import React, { FC, useEffect, useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { Row, Column, Pressable, useDisclose, Flex, Circle, Text, Input, View, Button } from "native-base"
import { NavigatorParamList } from "../../../navigators";
import { useSelector, useDispatch } from 'react-redux';

// Component
import { Screen, windowWidth, windowHeight } from "../../../components/modules/Screen/Screen"
import { Platform } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { increment } from "../../../store/reducers/counterSlice";

export const LoginScreen: FC<StackScreenProps<NavigatorParamList, "LoginScreen">> =
    ({ navigation }) => {
        //States
        const [email, setEmail] = useState("")
        const [rememberMe, setRememberMe] = useState(false)
        const [password, setPassword] = useState("")
        const [errorMessage, setErrorMessage] = useState(null)
        const [isLoading, setIsLoading] = useState(false)
        const { isOpen, onOpen, onClose } = useDisclose()

        //Methods
        const loginUser = () => {
            setIsLoading(true)
            if (email.length == 0 || password.length == 0) {
                return
            }
            // userStore.loginUser(email.trim(), password.trim()).then((ok) => {
            //     if (ok) {
            //         setIsLoading(false)
            //         setErrorMessage(null)
            //         userStore.setRememberMe(rememberMe)
            //         handleIncompleteSignup(userStore, navigation)
            //     } else {
            //         setIsLoading(false)
            //         console.log(translate("authentication.errors.incorrectPassword" as TxKeyPath))
            //         setErrorMessage(translate("authentication.errors.incorrectPassword"))
            //     }
            // })
        }

        const count = useSelector((state) => state);
        const dispatch = useDispatch();

        return (
            <Screen
                unsafeAreaColor="white"
                bg="white"
                w={windowWidth}
                h={windowHeight}
                justifyContent="space-between"
                padding="5"
                scrollEnabled={false}
            >
                <Column width="100%" alignItems={"flex-end"}>
                    <Row width="100%" flexDirection={"row-reverse"}>
                        <>
                            <Pressable
                                onPress={() => {
                                    console.log("need to be programmized")
                                }}
                            >
                                <Circle
                                    size="30px"
                                    bg={"gray.50"}
                                >
                                    <Ionicons name="chevron-back" size={24} color={"black"} />
                                </Circle>
                            </Pressable>
                        </>
                    </Row>
                    <View>
                        {/* <Text>Count: {count}</Text> */}
                        <Button onPress={() => dispatch(increment())} >
                            <Text>
                                "Increment"
                            </Text>
                        </Button>
                        <Button onPress={() => dispatch(decrement())} >
                            <Text>
                                "Decrement"
                            </Text>
                        </Button>
                    </View>
                    <Row
                        direction={"row"}
                        marginTop="9">
                        <Text
                            color="gray.700"
                        >{"login screen"}</Text>
                    </Row>
                    <Column marginTop="12">
                        <Row
                            direction={"row"}
                        >
                            <Text
                                color="gray.700"
                            >"Login2"</Text>
                        </Row>
                        <Input
                            // height={(Platform.OS == "ios") ? "39px" : "38px"}
                            marginTop="6px"
                            onChangeText={setEmail}
                        />
                    </Column>
                    <Column marginTop="6">
                        <Row
                            direction={"row"}
                        >

                        </Row>

                    </Column>
                    <Column marginTop="6">
                        <Pressable
                            onPress={() => {
                                setRememberMe(!rememberMe)
                            }}
                        >
                            <Flex
                                alignItems={"center"}
                                flexDirection={"row"}
                            >
                                {/* <BaseCheckbox isChecked={rememberMe} label="Remember Me" />
                                <BaseText
                                    mx="2"
                                    typography={appendLanguageKeyToThemeTypography(
                                        "label.3",
                                        i18nStore.getCurrentLanguage(),
                                    )}
                                    txtkey="authentication.login.remember"
                                    color="gray.700"
                                /> */}
                            </Flex>
                        </Pressable>
                    </Column>
                </Column>
                {/* <Column marginBottom={Platform.OS == "ios" ? "20" : "10"}>
                    <Row width="100%">
                        <RoundedButton
                            isLoading={isLoading}
                            disabled={email.trim().length && password.trim().length
                                ? false
                                : true
                            }
                            variant={
                                RoundedButton.variants.primary
                            }
                            width="100%"
                            onPress={loginUser}
                        >
                            <BaseText txtkey="global.button.login"
                                typography={appendLanguageKeyToThemeTypography(
                                    "heading.7",
                                    i18nStore.getCurrentLanguage(),
                                )}
                            />
                        </RoundedButton>
                    </Row>
                    <BaseText
                        marginTop="19px"
                        textAlign="center"
                        typography={appendLanguageKeyToThemeTypography(
                            "heading.13",
                            i18nStore.getCurrentLanguage(),
                        )}
                        txtkey="global.modal.modalHeadingText"
                        color="primary.400"
                        onPress={onOpen}
                    />
                </Column>
                {
                    isOpen ?
                        <ForgotPasswordModal
                            isOpen={isOpen}
                            onClose={onClose}
                            onOpen={onOpen}
                            navigation={navigation}
                        />
                        : null
                } */}
            </Screen >
        )
    }