import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

interface ContainerProps {
  children: React.ReactNode;
  safeArea?: boolean;
}

export const Container = ({ children, safeArea = true }: ContainerProps) => {
  const { color } = useTheme();

  if (!safeArea)
    return (
      <View
        style={{ flex: 1, backgroundColor: color.neutral_color_high_light }}
      >
        {children}
      </View>
    );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.neutral_color_high_light,
      }}
      edges={["top"]}
    >
      {children}
    </SafeAreaView>
  );
};
