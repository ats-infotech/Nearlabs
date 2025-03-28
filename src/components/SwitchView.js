import React, { useState } from "react";
import { Colors } from '../constants/theme';
import * as C from '../constants/index';
const {
    DynamicView,
    CText,
    DynamicTouchView
} = require('../styles');

export default function SwitchView(props) {
    const { title1, title2, index, setIndexChange } = props

    return (
        <DynamicView dynamic dynamicHeightFix height={35}
            bR={10} pH={5} pV={5} jC={'flex-start'} fD={'row'} >
            <DynamicTouchView dynamic dynamicHeight pH={15} height={100} bGC={index == 0 ? Colors.gray : ''}
                bR={6} jC={'center'} onPress={() => {
                    setIndexChange(0)
                }}>
                <CText dynamic mH={10} fF={C.fontsName.FONT_REGULAR} fS={14} color={index == 0 ? Colors.textColor : Colors.lightGray}>{title1}</CText>
            </DynamicTouchView>
            <DynamicTouchView dynamic dynamicHeight pH={15} height={100} bGC={index == 1 ? Colors.gray : ''}
                bR={6} jC={'center'} onPress={() => {
                    setIndexChange(1)
                }}>
                <CText dynamic mH={10} fF={C.fontsName.FONT_REGULAR} fS={14} color={index == 1 ? Colors.textColor : Colors.lightGray}>{title2}</CText>
            </DynamicTouchView>
        </DynamicView>
    );
}