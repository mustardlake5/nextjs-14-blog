import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow mt-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
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
            href="#"
            className="text-3xl font-bold hover:text-slate-600 mt-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="mt-4 text-sm">Published on 2024/02/12</p>
          <Link href="#" className="mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit fuga
            neque quod quo obcaecati ex mollitia blanditiis laboriosam deleniti,
            tempora excepturi nihil eos. Eaque facilis mollitia voluptatibus
            possimus? Sed, quisquam?
          </Link>
          <Link href="#" className="mt-6 text-pink-800 hover:text-slate-900">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow mt-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
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
            href="#"
            className="text-3xl font-bold hover:text-slate-600 mt-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="mt-4 text-sm">Published on 2024/02/12</p>
          <Link href="#" className="mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit fuga
            neque quod quo obcaecati ex mollitia blanditiis laboriosam deleniti,
            tempora excepturi nihil eos. Eaque facilis mollitia voluptatibus
            possimus? Sed, quisquam?
          </Link>
          <Link href="#" className="mt-6 text-pink-800 hover:text-slate-900">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
