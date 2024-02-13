"use client";

import { deleteArticleById } from "@/blogAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setLoading(true);
    await deleteArticleById(id);
    setLoading(false);
    router.push("/");
    router.refresh();
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-600 py-2 px-5 rounded-md"
      onClick={handleDelete}
      disabled={loading}
    >
      削除
    </button>
  );
};

export default DeleteButton;
