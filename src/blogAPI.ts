import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const response = await fetch("http://localhost:3001/articles", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }

  const articles = await response.json();
  return articles;
};
