import { RouteProp, useRoute } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { ActivityIndicator, Text } from "react-native";
import { RootStackParamList } from "../../@types/navigation";
import { CommentCardItem } from "../../components/CommentCardItem";
import { Container } from "../../components/Container";
import { PostHeader } from "../../components/PostHeader";
import { useAuthors } from "../../hook/useAuthor";
import { useComments } from "../../hook/useComments";
import { usePost } from "../../hook/usePost";

export const Post = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "Post">>();
  const { postId = 0, authorId } = params;
  const { data: post } = usePost(postId);
  const { data: author } = useAuthors(authorId);
  const { data: comments, isLoading } = useComments(postId);
  return (
    <Container safeArea={false}>
      <FlashList
        data={comments}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        keyExtractor={(item) => String(`post-${item.id}`)}
        estimatedItemSize={10}
        ListHeaderComponent={() => (
          <PostHeader
            title={post?.title}
            username={author?.username}
            body={post?.body}
          />
        )}
        renderItem={({ item }) => <CommentCardItem item={item} />}
        ListEmptyComponent={() =>
          comments && !isLoading ? (
            <Text>Não a comentarios</Text>
          ) : (
            <ActivityIndicator />
          )
        }
      />
    </Container>
  );
};
