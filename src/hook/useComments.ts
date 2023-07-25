import useSWR from "swr";
import { IComment } from "../@types/comment";
import { fetcher } from "../api";

export const useComments = (postId: number) => {
  return useSWR<IComment[]>(
    postId ? `posts/${postId}/comments/` : null,
    fetcher
  );
};
