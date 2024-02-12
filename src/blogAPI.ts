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

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDateTime = new Date().toISOString();

  const response = await fetch("http://localhost:3001/articles/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDateTime }),
  });

  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }

  const newArticle: Article = await response.json();
  return newArticle;
};

export const deleteArticleById = async (id: string): Promise<Article> => {
  const response = await fetch(`http://localhost:3001/articles/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }

  const deleteArticle: Article = await response.json();
  return deleteArticle;
};
