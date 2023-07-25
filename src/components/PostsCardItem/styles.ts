import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.color.neutral_color_high_pure};
  width: 100%;
  margin-bottom: 10px;
  height: 110px;
  padding: 10px;
  justify-content: space-between;
  border-radius: 10px;
`;
