import { Entypo } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { Text } from "../Text";
import { Container } from "./styles";

interface PaginationButtonProps extends TouchableOpacityProps {
  isPrevious?: boolean;
}

export const PaginationButton = ({
  isPrevious,
  ...rest
}: PaginationButtonProps) => {
  return (
    <Container {...rest}>
      {isPrevious ? (
        <>
          <Entypo name="chevron-left" size={24} color="white" />
          <Text family="bold" color="neutral_color_high_pure">
            Anterior
          </Text>
        </>
      ) : (
        <>
          <Text family="bold" color="neutral_color_high_pure">
            Proximo
          </Text>
          <Entypo name="chevron-right" size={24} color="white" />
        </>
      )}
    </Container>
  );
};
