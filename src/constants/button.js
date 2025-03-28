import React from 'react';
const {
    CText,
    DynamicImage,
    DynamicButton
} = require('../styles')
import { Colors } from './theme';
import * as C from '../constants/index';

export const ButtonWithImage = ({ mL, mT, bG, wT, text, imageName, isBorder, onPress }) => {
    return (
        <DynamicButton dynamic dynamicWidth bw={1} width={wT ? wT : 30} height={35} bGC={bG}
            mT={mT} bR={8} bW={isBorder ? 1 : 0} bC={Colors.borderColor} onPress={() => { onPress() }}>
            <CText dynamic mL={mL ? mL : 0} fF={C.fontsName.FONT_REGULAR} fS={12} color={Colors.whiteColor}>{text}</CText>
            <DynamicImage dynamic source={imageName} width={10} height={10} mL={5} />
        </DynamicButton>
    )
}