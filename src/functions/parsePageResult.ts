import { parseLinkToUrl } from "./parseLinkToUrl";

export const parsePageResult = (pageResult: Record<string, unknown>) => {
  const rawProducts = pageResult.products as Record<string, unknown>[];

  const products = rawProducts.map((rawProduct) => ({
    id: rawProduct.articleCode,
    name: rawProduct.title,
    price: rawProduct.price,
    link: parseLinkToUrl(rawProduct.link as string),
  }));

  return products;
};
