import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.neutral_color_high_pure};
  border-radius: 10px;
  gap: 10px;
  margin-bottom: 10px;
`;
