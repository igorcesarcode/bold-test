import useSWR from "swr";
import { IAuthor } from "../@types/authors";
import { fetcher } from "../api";

export const useAuthors = (userId: number) => {
  return useSWR<IAuthor>(userId ? `/users/${userId}` : null, fetcher);
};
