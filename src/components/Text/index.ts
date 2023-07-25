import { JSXElementConstructor } from "react";
import { colorOptions, fontOptions } from "../../theme";

import { TextProps } from "react-native";

import styled from "styled-components/native";

interface CustomTextProps extends TextProps {
  color?: colorOptions;
  size?: number;
  family?: fontOptions;

  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;

  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;

  transform?: "none" | "capitalize" | "uppercase" | "lowercase";
  align?: "left" | "center" | "right" | "justify";
  disabled?: boolean;
}

export const Text = styled.Text<CustomTextProps>`
  font-family: ${({ family, theme }) =>
    family ? theme.font[family] : theme.font.regular};
  font-size: ${({ size }) => (size ? `${size}px` : "15px")};
  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.neutral_color_low_pure};
  padding-left: ${({ pl }) => (pl ? `${pl}px` : "0px")};
  padding-bottom: ${({ pb }) => (pb ? `${pb}px` : "0px")};
  padding-top: ${({ pt }) => (pt ? `${pt}px` : "0px")};
  padding-right: ${({ pr }) => (pr ? `${pr}px` : "0px")};

  margin-top: ${({ mt }) => (mt ? `${mt}px` : "0px")};
  margin-right: ${({ mr }) => (mr ? `${mr}px` : "0px")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "0px")};
  margin-left: ${({ ml }) => (ml ? `${ml}px` : "0px")};
  text-align: ${({ align }) => (align ? align : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
` as JSXElementConstructor<CustomTextProps>;
