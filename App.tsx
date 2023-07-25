import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_900Black,
  useFonts,
} from "@expo-google-fonts/montserrat";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import theme from "./src/theme";
export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
