import DeleteButton from "@/app/components/DeleteButton";
import { deleteArticleById, getArticleById } from "@/blogAPI";
import Image from "next/image";

const Article = async ({ params }: { params: { id: string } }) => {
  const article = await getArticleById(params.id);

  // const handleDelete = async () => {
  //   await deleteArticleById(params.id);
  // };

  return (
    <div className="max-w-3xl mx-auto m-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
        alt=""
        width={1280}
        height={300}
      />
      <div className="flex flex-col">
        <span className="mt-4 text-sm text-right text-pink-400">
          Published on {article.createdAt}
        </span>
        <h1 className="text-4xl text-center mt-8">{article.title}</h1>
        <p className="mt-10 text-lg leading-relaxed text-justify">
          {article.content}
        </p>
      </div>

      <div className="text-right mt-3">
        <DeleteButton id={article.id} />
      </div>
    </div>
  );
};

export default Article;
