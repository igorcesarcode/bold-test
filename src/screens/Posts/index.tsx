import { FlashList } from "@shopify/flash-list";
import { useRef } from "react";

import { Container } from "../../components/Container";
import { PaginationButton } from "../../components/PaginationButton";
import { PostsCardItem } from "../../components/PostsCardItem";
import { PostsHeader } from "../../components/PostsHeader";
import { Text } from "../../components/Text";
import { usePosts } from "../../hook/usePosts";
import { PaginationContainer } from "./styles";

const ITEMS_PER_PAGE = 9;

export const Posts = () => {
  const {
    posts,
    handleNextPage,
    handlePrevPage,
    isFistPage,
    isLastPage,
    currentPage,
    totalPages,
  } = usePosts(ITEMS_PER_PAGE);
  const flatListRef = useRef(null);
  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  return (
    <Container>
      <FlashList
        data={posts}
        ref={flatListRef}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        keyExtractor={(item) => String(`post-${item.id}`)}
        estimatedItemSize={ITEMS_PER_PAGE}
        ListHeaderComponent={PostsHeader}
        renderItem={({ item }) => <PostsCardItem item={item} />}
        ListFooterComponent={() => (
          <PaginationContainer>
            <Text>{`${currentPage} de ${totalPages} paginas`}</Text>
            {isLastPage && (
              <PaginationButton
                onPress={() => {
                  handleNextPage();
                  scrollToTop();
                }}
              />
            )}

            {isFistPage && (
              <PaginationButton
                onPress={() => {
                  handlePrevPage();
                  scrollToTop();
                }}
                isPrevious
              />
            )}
          </PaginationContainer>
        )}
      />
    </Container>
  );
};
