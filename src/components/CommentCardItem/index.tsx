import { useState } from "react";
import { ICommentsCardItem } from "../../@types/comments-card-item";
import { Text } from "../Text";
import { Container } from "./styles";

const FULL_COMMENT = {
  showTitle: null,
  showBody: null,
  showText: "Ver Menos",
};
const SHORT_COMMENT = {
  showTitle: 1,
  showBody: 3,
  showText: "Ver Mais",
};

export const CommentCardItem = ({ item }: ICommentsCardItem) => {
  const [commentFull, setCommentFull] = useState(false);

  const commentState = commentFull ? FULL_COMMENT : SHORT_COMMENT;

  const showComment = () => {
    setCommentFull((commentFull) => !commentFull);
  };

  return (
    <Container>
      <Text numberOfLines={commentState.showBody} family="medium">
        {item.body}
      </Text>
      <Text onPress={showComment} style={{ textAlign: "right" }}>
        {commentState.showText}
      </Text>
      <Text
        family="medium"
        color="neutral_color_low_medium"
        adjustsFontSizeToFit
      >
        Publicado por: {item.email}
      </Text>
    </Container>
  );
};
