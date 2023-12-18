import { endpoint } from "@ev-fns/endpoint";
import { HttpError } from "@ev-fns/errors";
import { fetchPage } from "../functions/fetchPage";
import { parsePageResult } from "../functions/parsePageResult";

export const scrapperPost = endpoint(async (req, res) => {
  const { search, page } = req.body;

  const pageResult = await fetchPage({
    search,
    page,
  });

  const result = parsePageResult(pageResult);

  res.status(200).json({
    items: result,
  });
});
