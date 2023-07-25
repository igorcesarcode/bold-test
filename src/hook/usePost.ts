import useSWR from "swr";
import { IPost } from "../@types/post";
import { fetcher } from "../api";

export const usePost = (postId: number) => {
  return useSWR<IPost>(postId ? `/posts/${postId}` : null, fetcher);
};
