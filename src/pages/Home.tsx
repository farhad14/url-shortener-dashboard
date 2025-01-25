import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Shortener from "./Shortener";
import UrlList from "./UrlList";

export interface Url {
  title: string;
  description: string;
  urlId: string;
  originalUrl: string;
  shortUrl: string;
  clicks: any[];
  date: string;
}

export interface TempUrl {
  fullUrl: string;
  shortUrl: string;
}

interface Response {
  data: Url[];
  total: number;
}

export default function Main() {
  const base = "https://ffct.ir";

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
    isLoading,
  } = useInfiniteQuery<Response, Error>({
    queryKey: ["urls"],
    queryFn: ({ pageParam }) => {
      return axios
        .get(`${base}/api/urls`, { params: { page: pageParam } })
        .then((res) => res.data);
    },
    getNextPageParam: (lastPage, pages) => {
      const lastPageNumber = Math.ceil(lastPage.total / 50);
      return pages.length === lastPageNumber ? undefined : pages.length + 1;
    },
  });

  if (!data) return null;

  const _urls = data.pages.flatMap((page) => page.data);
  return (
    <main>
      <div className="p-5 max-w-[800px] mx-auto">
        <Shortener onAdd={refetch} />
        <UrlList urlList={_urls} isLoading={isLoading} />
        {hasNextPage && (
          <div className="flex justify-center py-5">
            <button
              className="btn"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
