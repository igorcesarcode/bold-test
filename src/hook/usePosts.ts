import { useState } from "react";
import useSWR from "swr";
import { IPost } from "../@types/post";
import { fetcher } from "../api";

export const usePosts = (itemsPerPage: number) => {
  const { data, error, isLoading } = useSWR<IPost[]>(`/posts`, fetcher);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const isFistPage = currentPage > 1;
  const isLastPage = data?.length > endIndex;
  const totalCount = data?.length ?? 0;
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handleNextPage = () => {
    isLastPage && setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    isFistPage && setCurrentPage((prevPage) => prevPage - 1);
  };

  const currentPosts = data ? data.slice(startIndex, endIndex) : [];

  return {
    posts: currentPosts,
    isLoading,
    isError: error,
    currentPage,
    isFistPage,
    isLastPage,
    totalCount,
    endIndex,
    totalPages,
    handleNextPage,
    handlePrevPage,
  };
};
