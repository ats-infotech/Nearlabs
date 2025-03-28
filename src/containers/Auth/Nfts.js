/**
 * @format
 * @flow
 */
import React, { useState } from 'react';
const {
    DynamicView, CText,
    DynamicImage
} = require('../../styles');
import { Colors } from '../../constants/theme';
import AppImages from '../../../assets/images/appImages'
import { DynamicScrollView } from '../../styles/viewStyle';
import * as C from "../../constants";
import { ButtonWithImage } from "../../constants/button";
import { FlatList } from "react-native";

export default function CreateNfts(props) {
    const [transactionData, setTransactionData] = useState([1, 2, 3, 4]);
    //NOTE: DEFINE VARIABLE 🍎🍎🍎🍎🍎🍎

    //NOTE: LIFE CYCLE METHOD 🍎🍎🍎🍎🍎

    //NOTE: HELPER METHOD 🍎🍎🍎🍎🍎

    //NOTE: RENDER TRANSACTION METHOD 🍎🍎🍎🍎🍎
    const renderTransaction = () => {
        return (
            <DynamicView dynamic aLIT='flex-start' pV={5} mH={10} >
                <DynamicView dynamic aLIT='flex-start' fD={'row'} mH={10}>
                    <DynamicView dynamic dynamicWidth dynamicHeightFix height={45} width={15} fD={'row'} pH={12} bR={25} bC={Colors.black} bO={1}>
                        <DynamicImage dynamic width={20} height={20} source={AppImages.NEAR_VECTOR} />
                    </DynamicView>
                    <DynamicView dynamic mH={10} mV={10}>
                        <CText dynamic fF={C.fontsName.FONT_BLACK} fS={16} mL={7}
                            color={Colors.blue}>john.near</CText>
                        <CText dynamic fF={C.fontsName.FONT_BLACK} fS={16} mL={7}
                            color={Colors.black}>john.near</CText>
                    </DynamicView>
                </DynamicView>
            </DynamicView>
        );
    }

    //NOTE: LIFE CYCLE METHOD 🍎🍎🍎🍎

    return (
        <DynamicView dynamic dynamicWidth dynamicHeight height={100} width={100} jC='flex-start' bGC={Colors.whiteColor}>
            <DynamicView dynamic dynamicHeightFix height={35} mT={50} fD={'row'} pH={10} bR={15} bC={Colors.black} bO={1}>
                <DynamicImage dynamic width={20} height={20} source={AppImages.NEAR_VECTOR} />
                <CText dynamic fF={C.fontsName.FONT_BLACK} fS={16} mL={7}
                    color={Colors.black}>john.near</CText>
            </DynamicView>
            <DynamicScrollView dynamic dynamicWidth width={100} jC='center' mT={15}>
                <DynamicView dynamic pH={10} bR={10} mT={5} bC={Colors.black} bO={1} mT={5} mH={20} fD={'row'}>
                    <DynamicView dynamic dynamicWidth width={70} mB={10} jC='flex-start'>
                        <CText dynamic fF={C.fontsName.FONT_REGULAR} fS={27}
                            color={Colors.black} mL={15} mT={15} tA={'left'}>Start Creating your <CText dynamic
                                fF={C.fontsName.FONT_BLACK} fS={27}
                                color={Colors.black}>NFTs</CText> <CText dynamic fF={C.fontsName.FONT_REGULAR} fS={27}
                                    color={Colors.black}>Today</CText></CText>

                        <ButtonWithImage mT={10} bG={Colors.blue} vC={Colors.appColor} wT={80}
                            text={'Create an NFT'} imageName={AppImages.RIGHT_ARROW} isBorder={true} onPress={() => {

                            }} />
                    </DynamicView>
                    <DynamicImage dynamic width={100} height={100} source={AppImages.LOGO_NFTS} />
                </DynamicView>
                <DynamicView>
                    <DynamicView dynamic mT={20} fD={'row'} pH={10}>
                        <CText dynamic fF={C.fontsName.FONT_BOLD} fS={18} mL={5}
                            color={Colors.black}>Recent Transactions</CText>
                        <CText dynamic fF={C.fontsName.FONT_REGULAR} fS={16}
                            color={Colors.blue}>See All</CText>
                    </DynamicView>
                    <FlatList
                        scrollEnabled={false}
                        data={transactionData}
                        renderItem={renderTransaction}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </DynamicView>
            </DynamicScrollView>
        </DynamicView>
    );
}
