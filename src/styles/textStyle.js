import React from 'react';
import styled, { css } from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
import * as C from '../constants';

export const CText = styled.Text`
  ${(props) =>
    props.dynamic &&
    css`
      font-family: ${props.fF ? props.fF : C.fontsName.FONT_REGULAR};
      text-align: ${props.tA ? props.tA : 'center'};
      color: ${props.color ? props.color : props.theme.secondaryColor};
      font-size: ${scale(props.fS ? props.fS : 16)}px;
      color: ${props.color ? props.color : props.theme.primaryTextColor};
      margin-top: ${scale(props.mT ? props.mT : 0)}px;
      margin-left: ${scale(props.mL ? props.mL : 0)}px;
    `},
`;