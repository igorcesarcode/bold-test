const defaultTheme = {
  color: {
    brand_color_primary_dark: "#071A2C",

    neutral_color_low_pure: "#000000",
    neutral_color_low_light: "#A3A3A3",
    neutral_color_low_medium: "#666666",
    neutral_color_low_dark: "#292929",

    neutral_color_high_pure: "#FFFFFF",
    neutral_color_high_light: "#F5F5F5",
    neutral_color_high_medium: "#E0E0E0",
    neutral_color_high_dark: "#CCCCCC",

    transparent: "transparent",
  },
  font: {
    regular: "Montserrat_400Regular",
    medium: "Montserrat_500Medium",
    bold: "Montserrat_700Bold",
    black: "Montserrat_900Black",
  },
};

export type ThemeType = typeof defaultTheme;

export type colorOptions = keyof typeof defaultTheme.color;
export type fontOptions = keyof typeof defaultTheme.font;

export default defaultTheme;
