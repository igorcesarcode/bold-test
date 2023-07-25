import type { HeaderOptions } from "@react-navigation/elements";
import { StyleProp } from "react-native";
import theme from "../theme";
import defaultTheme from "./index";
export declare type StackHeaderOptions = Omit<
  HeaderOptions,
  "headerLeft" | "headerTitle" | "headerRight"
> &
  object;

export const stackNavigationHeaderDefault = {
  headerTitleStyle: {
    fontFamily: theme.font.medium,
    fontSize: 20,
    color: theme.color.neutral_color_low_pure,
  },

  headerStyle: {
    backgroundColor: defaultTheme.color.neutral_color_high_light,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  } as StyleProp<{
    backgroundColor?: string;
  }>,
  headerTintColor: defaultTheme.color.brand_color_primary_dark,
};
