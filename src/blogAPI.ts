import { Article } from "./types";
import { notFound } from "next/navigation";

export const getAllArticles = async (): Promise<Article[]> => {
  const response = await fetch("http://localhost:3001/articles", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }

  const articles: Article[] = await response.json();
  return articles;
};

export const getArticleById = async (id: string): Promise<Article> => {
  const response = await fetch(`http://localhost:3001/articles/${id}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }

  const article: Article = await response.json();
  return article;
};
