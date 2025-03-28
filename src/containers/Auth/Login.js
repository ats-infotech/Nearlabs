/**
 * @format
 * @flow
 */
import React, { useState } from 'react';
const {
    CText,
    DynamicView,
    DynamicImage
} = require('../../styles');
import * as C from '../../constants/index';
import { Colors } from '../../constants/theme';
import AppImages from '../../../assets/images/appImages'
import SwitchView from '../../components/SwitchView';
import { Input } from '../../styles/textInputStyle';
import { DynamicScrollView, DynamicTouchView } from '../../styles/viewStyle';
import { ButtonWithImage } from '../../constants/button';
import CreateNearAccount from '../../components/createNearAccount';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';

export default function Login(props) {
    //NOTE: DEFINE VARIABLE 🍎🍎🍎🍎🍎🍎 
    const [index, setIndex] = useState(0);
    const [createAccount, setCreateAccount] = useState(false);


    //NOTE: LIFE CYCLE METHOD 🍎🍎🍎🍎🍎

    //NOTE: HELPER METHOD 🍎🍎🍎🍎🍎

    //NOTE: LIFE CYCLE METHOD 🍎🍎🍎🍎

    return (
        <>
            <CreateNearAccount
                isModalVisible={createAccount}
                onPress={() => setCreateAccount(false)}
                userSelection={() => props.navigation.navigate(C.screenTitle.USERS)}
            />
            <DynamicView dynamic dynamicWidth dynamicHeight height={100} width={100} jC='flex-start' bGC={Colors.whiteColor}>
                <DynamicView dynamic dynamicWidth dynamicHeight height={30} width={100} aLIT={"flex-start"} bGC={Colors.yellow}>
                    <DynamicImage dynamic width={250} height={250} source={AppImages.LOGIN_DESIGN} />
                </DynamicView>
                <DynamicView dynamic dynamicWidth width={100} jC='center' aLIT={"center"} bGC={Colors.yellow}>
                    <DynamicImage dynamic width={110} height={40} source={AppImages.LOGO_APP} />
                </DynamicView>
                <KeyboardAwareScrollView style={{ width: "100%", height: "100%" }}>
                    <DynamicScrollView dynamic dynamicWidth width={100} jC='center' bGC={Colors.whiteColor} mT={5}>
                        <DynamicView dynamic dynamicWidth width={100} jC='center' bGC={Colors.whiteColor}>
                            <SwitchView
                                title1={'Email'}
                                title2={'Phone'}
                                index={index}
                                setIndexChange={(index) => {
                                    setIndex(index)
                                }}
                            />
                            <Input dynamicBorderColor borderColor={Colors.borderColor} mT={10} bGC={Colors.backgroundText}
                                style={{ width: '90%', height: 50, color: 'black' }}
                                placeholder={index == 0 ? 'Email Address' : 'Ex. (373) 378 8383'}
                                keyboardType={index == 0 ? 'email-address' : 'number-pad'}
                                onChangeText={(text) => {

                                }}
                            />
                            <ButtonWithImage mT={10} bG={Colors.darkGray} vC={Colors.appColor}
                                text={'Get Started'} imageName={AppImages.RIGHT_ARROW} isBorder={true} onPress={() => {
                                    setCreateAccount(true)
                                }} />
                            <DynamicView dynamic dynamicWidth height={1} width={90} bGC={Colors.sepratorColor} mT={20}  ></DynamicView>
                            <CText dynamic mL={10} mH={10} fF={C.fontsName.FONT_REGULAR} fS={12} color={Colors.black} mT={15}>Already have Near Account?</CText>

                            <Input dynamicBorderColor borderColor={Colors.borderColor} mT={10} bGC={Colors.backgroundText}
                                style={{ width: '90%', height: 50, color: 'black' }}
                                placeholder={'walletName.near'}
                                onChangeText={(text) => {

                                }}
                            />
                            <ButtonWithImage mT={10} bG={Colors.blue} vC={Colors.appColor} wT={20}
                                text={'Login'} imageName={AppImages.RIGHT_ARROW} isBorder={true} onPress={() => {

                                }} />
                            <DynamicTouchView dynamic dynamicWidth width={85} mV={15} mT={5}>
                                <CText dynamic mL={10} mH={20} fF={C.fontsName.FONT_REGULAR} fS={12}
                                    color={Colors.black}>by clicking continue you must agree to near labs <CText dynamic
                                        fF={C.fontsName.FONT_REGULAR} fS={12}
                                        color={Colors.blue}>Terms & Conditions  </CText> and  <CText dynamic fF={C.fontsName.FONT_REGULAR} fS={12}
                                            color={Colors.blue}>Privacy Policy</CText></CText>
                            </DynamicTouchView>
                        </DynamicView>
                    </DynamicScrollView>
                </KeyboardAwareScrollView>
            </DynamicView>
        </>
    );
}
