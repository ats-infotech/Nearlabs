/**
 * @format
 * @flow
 */
/* eslint-disable */
import styled, { css } from 'styled-components/native';
import { scale } from 'react-native-size-matters';

export const Input = styled.TextInput`
  padding: ${scale(2)}px;
  margin: ${scale(2)}px;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: ${scale(3)}px;
  ${props =>
    props.dynamicBorderColor &&
    css`
      border: 1px solid ${props.borderColor};
      margin-top: ${scale(props.mT ? props.mT : 0)}px;
      margin-left: ${scale(props.mL ? props.mL : 10)}px;
      width: ${scale(props.width ? props.width : 10)}px;
      padding-left: ${scale(props.pL ? props.pL : 20)}px;
      background-color: ${props.bGC ? props.bGC : 'transparent'};
    `}
`;
