import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  padding: 10px 0 10px 0;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.brand_color_primary_dark};
  margin-bottom: 10px;
  border-radius: 10px;
  gap: 5px;
`;
