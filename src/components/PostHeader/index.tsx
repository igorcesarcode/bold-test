import { Text } from "../Text";
import { Container } from "./styles";

export const PostHeader = ({ title, username, body }) => {
  return (
    <Container>
      <Text family="black" mt={5}>
        {title}
      </Text>
      <Text mb={10}>Publicado por {username}</Text>
      <Text mb={20} family="medium">
        {body}
      </Text>
    </Container>
  );
};
