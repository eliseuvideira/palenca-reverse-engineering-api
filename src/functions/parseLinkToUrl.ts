export const parseLinkToUrl = (link: string) => {
  const url = new URL(link, "https://www2.hm.com/es_mx");

  return url.toString();
};
