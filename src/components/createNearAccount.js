import React, { useState } from "react";
import Modal from "react-native-modal";
import AppImages from '../../assets/images/appImages'
import { Colors } from "../constants/theme";
const {
    CText,
    DynamicView,
    DynamicImage,
} = require('../styles');
import * as C from '../constants/index';
import { DynamicScrollView, DynamicTouchView } from "../styles/viewStyle";
import { Input } from "../styles/textInputStyle";
import { ButtonWithImage } from "../constants/button";


export default function CreateNearAccount(props) {
    const { isModalVisible, onPress, userSelection } = props
    const [firstName, setFirstName] = useState('');
    const [walletId, setWalletId] = useState('');
    const [flagAccount, setFlagAccount] = useState('');


    return (
        <Modal isVisible={isModalVisible}
            onBackdropPress={() => { onPress() }}
            onRequestClose={() => { onPress() }}
            style={{ margin: 0 }}
        >
            <DynamicView dynamic dynamicWidth dynamicHeight width={100} height={100} bGC={'white'} mT={100} style={{
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
            }}>
                <DynamicView dynamic dynamicWidth width={100} aLIT='flex-start'>
                    <DynamicView dynamic dynamicWidth width={95} height={50} fD={'row'} mT={10} aLIT={"center"} >
                        <CText dynamic fF={C.fontsName.FONT_BOLD} fS={18} color={Colors.black}></CText>
                        <CText dynamic fF={C.fontsName.FONT_REGULAR} fS={18} mL={30} color={Colors.black}>Create NEAR Account</CText>
                        <DynamicTouchView dynamic onPress={() => onPress()}>
                            <DynamicImage dynamic source={AppImages.CLOSE} width={20} height={20} mL={5} />
                        </DynamicTouchView>
                    </DynamicView>
                    <DynamicView dynamic dynamicWidth width={70} height={3} bGC={Colors.blue}></DynamicView>
                    <DynamicScrollView dynamic dynamicHeight height={100}>
                        <DynamicView dynamic width={90} dynamicWidth height={70} mH={15} mT={20} >
                            <CText dynamic fF={C.fontsName.FONT_REGULAR} fS={12} tA={'left'} color={Colors.subTextColor} >Enter an Account ID to use with your NEAR account.
                                Your Account ID will be used for all NEAR operations, including sending and receiving assets.</CText>
                        </DynamicView>
                        <DynamicView dynamic dynamicWidth width={90} mH={15} aLIT={'center'} >
                            <CText dynamic fF={C.fontsName.FONT_REGULAR} fS={12} tA={'left'} mL={10} color={Colors.subTextColor} style={{ width: '100%', height: 20 }}>FULL NAME</CText>
                            <Input dynamicBorderColor borderColor={Colors.borderColor} mT={5} bGC={Colors.backgroundText}
                                style={{ width: '100%', height: 50, color: 'black' }}
                                placeholder={'Ex John Doe'}
                                value={firstName}
                                onChangeText={(text) => {
                                    setFirstName(text);
                                    if (text.length > 0 && walletId.length > 0) {
                                        setFlagAccount(true);
                                    } else {
                                        setFlagAccount(false)
                                    }
                                }}
                            />
                            <DynamicView dynamic dynamicWidth width={100} fD={'row'} aLIT={"flex-start"} jC={"flex-start"} mT={20}>
                                <CText dynamic fF={C.fontsName.FONT_REGULAR} fS={12} tA={'left'} mL={10} color={Colors.blue}
                                    style={{}}>WALLET ID</CText>
                                <DynamicImage dynamic source={AppImages.I_ICON} width={12} height={12} mL={5} />
                            </DynamicView>

                            <Input dynamicBorderColor borderColor={Colors.borderColor} mT={5} bGC={Colors.backgroundText}
                                style={{ width: '100%', height: 50, color: 'black' }}
                                placeholder={'yourname.near'}
                                value={walletId}
                                onChangeText={(text) => {
                                    setWalletId(text)
                                    if (firstName.length > 0 && text.length > 0) {
                                        setFlagAccount(true);
                                    } else {
                                        setFlagAccount(false)
                                    }
                                }}
                            />
                            <ButtonWithImage mT={20} bG={flagAccount ? Colors.black : Colors.darkGray} vC={Colors.appColor} wT={45}
                                text={'Create an account'} imageName={AppImages.RIGHT_ARROW} isBorder={true} onPress={() => {
                                    if(flagAccount){
                                        onPress()
                                        userSelection()
                                    }
                                }} />
                            <DynamicTouchView dynamic dynamicWidth width={100} mV={15} mT={15}>
                                <CText dynamic mL={10} mH={20} fF={C.fontsName.FONT_REGULAR} fS={12}
                                    color={Colors.textColor}>By creating a NEAR account, you agree to the NEAR Wallet <CText dynamic
                                        fF={C.fontsName.FONT_REGULAR} fS={12}
                                        color={Colors.blue}>Terms & Conditions  </CText>and  <CText dynamic fF={C.fontsName.FONT_REGULAR} fS={12}
                                            color={Colors.blue}>Privacy Policy</CText></CText>
                            </DynamicTouchView>
                            <DynamicView dynamic dynamicWidth height={1} width={90} bGC={Colors.sepratorColor} mT={10} ></DynamicView>
                            <CText dynamic mL={10} mH={10} fF={C.fontsName.FONT_REGULAR} fS={12} color={Colors.black} mT={20}>Already have Near Account?</CText>
                            <ButtonWithImage mT={20} bG={Colors.blue} vC={Colors.appColor} wT={45}
                                text={'Login With NEAR'} imageName={AppImages.RIGHT_ARROW} isBorder={true} onPress={() => {

                                }} />
                        </DynamicView>
                    </DynamicScrollView>
                </DynamicView>
            </DynamicView>
        </Modal>
    );
}