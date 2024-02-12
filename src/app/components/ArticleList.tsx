import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  const displayContentLength = 200;

  if (articles.length === 0) {
    return <></>;
  }

  return (
    <div>
      {articles.map((article) => (
        <article key={article.id} className="shadow mt-4">
          <Link href={`/articles/${article.id}`} className="hover:opacity-75">
            <Image
              src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
              alt=""
              width={1280}
              height={300}
            />
          </Link>
          <div className="flex flex-col bg-slate-50 text-slate-900 p-6">
            <Link href="#" className="text-blue-700 font-bold">
              Tecknology
            </Link>
            <Link
              href={`/articles/${article.id}`}
              className="text-3xl font-bold hover:text-slate-600 mt-4"
            >
              {article.title}
            </Link>
            <p className="mt-4 text-sm">Published on {article.createdAt}</p>
            <Link href={`/articles/${article.id}`} className="mt-3">
              {article.content.length <= displayContentLength
                ? article.content
                : `${article.content.substring(0, displayContentLength)}...`}
            </Link>
            <Link
              href={`/articles/${article.id}`}
              className="mt-6 text-pink-800 hover:text-slate-900"
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
