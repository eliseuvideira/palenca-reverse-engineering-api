import { USER_AGENT } from "../utils/constants";

export interface FetchPageProps {
  search: string;
  page: number;
}

export const fetchPage = async ({
  search,
  page,
}: FetchPageProps): Promise<Record<string, unknown>> => {
  const offset = (page - 1) * 40;
  const size = 80;

  const url = new URL(
    "https://www2.hm.com/es_mx/search-results/_jcr_content/search.display.json",
  );

  url.searchParams.append("q", search);
  url.searchParams.append("department", "1");
  url.searchParams.append("sort", "stock");
  url.searchParams.append("image-size", "small");
  url.searchParams.append("image", "stillLife");
  url.searchParams.append("offset", offset.toString());
  url.searchParams.append("page-size", size.toString());

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "User-Agent": USER_AGENT,
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Language": "en-US,en;q=0.5",
      "X-Requested-With": "XMLHttpRequest",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      Referer: `https://www2.hm.com/es_mx/search-results.html?q=${search}&sort=stock&image-size=small&image=stillLife&offset=0&page-size=${size}`,
    },
  });

  const content = await response.json();

  return content as Record<string, unknown>;
};
