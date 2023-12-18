import { endpoint } from "@ev-fns/endpoint";
import { HttpError } from "@ev-fns/errors";

export const scrapperPost = endpoint(async (req, res) => {
  throw new HttpError(501, "Not Implemented");
});
