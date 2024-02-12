"use client";

import { createArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id === "" || title === "" || content === "") {
      alert("全項目入力してください");
      return;
    }

    setLoading(true);

    await createArticle(id, title, content);

    setLoading(false);

    setId("");
    setTitle("");
    setContent("");

    router.push("/");
    router.refresh();
  };
  return (
    <div className="mx-3 md:mx-5 my-5">
      <h2 className="text-2xl font-bold">ブログ新規作成</h2>

      <form
        className="mt-4 bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="first:mt-0 mt-4">
          <label className="text-gray-700 text-sm font-bold" htmlFor="id">
            スラッグ
          </label>
          <input
            type="text"
            className="mt-2 w-full text-slate-900 rounded shadow py-2 px-3 leading-tight focus:outline-none"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="first:mt-0 mt-4">
          <label className="text-gray-700 text-sm font-bold" htmlFor="title">
            タイトル
          </label>
          <input
            type="text"
            className="mt-2 w-full text-slate-900 rounded shadow py-2 px-3 leading-tight focus:outline-none"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="first:mt-0 mt-4">
          <label className="text-gray-700 text-sm font-bold" htmlFor="content">
            本文
          </label>
          <textarea
            className="resize-none mt-2 w-full text-slate-900 rounded shadow py-2 px-3 leading-tight focus:outline-none"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-4 py-2 px-4 rounded-md bg-orange-300 hover:bg-orange-400 duration-100"
          disabled={loading}
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
