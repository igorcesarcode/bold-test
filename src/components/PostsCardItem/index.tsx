import { useNavigation } from "@react-navigation/native";

import { IPostsCardItem } from "../../@types/posts-card-item";
import { useAuthors } from "../../hook/useAuthor";
import { Text } from "../Text";
import { Container } from "./styles";

export const PostsCardItem = ({ item }: IPostsCardItem) => {
  const { data } = useAuthors(item.userId);
  const navigation = useNavigation();

  return (
    <Container
      onPress={() =>
        navigation.navigate("Post", { postId: item.id, authorId: data.id })
      }
    >
      <Text numberOfLines={1} color="brand_color_primary_dark" family="bold">
        {item.title ?? ""}
      </Text>
      <Text
        numberOfLines={2}
        size={10}
        family="bold"
        color="neutral_color_low_medium"
        style={{
          width: "70%",
        }}
      >
        {item.body ?? ""}
      </Text>
      {data && (
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={2}
          color="neutral_color_low_light"
        >
          Publicado por: {data.username ?? ""}
        </Text>
      )}
    </Container>
  );
};
