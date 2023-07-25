import { Text } from "../Text";

export const PostsHeader = () => {
  return (
    <>
      <Text
        family="bold"
        size={30}
        adjustsFontSizeToFit
        color="brand_color_primary_dark"
      >
        Publicações
      </Text>
      <Text
        family="bold"
        size={20}
        adjustsFontSizeToFit
        mb={10}
        color="neutral_color_high_dark"
      >
        Veja a lista completa de posts
      </Text>
    </>
  );
};
