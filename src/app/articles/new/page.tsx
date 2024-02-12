const CreateBlogPage = () => {
  return (
    <div className="mx-3 md:mx-5 my-5">
      <h2 className="text-2xl font-bold">ブログ新規作成</h2>

      <form className="mt-4 bg-slate-200 p-6 rounded shadow-lg">
        <div className="first:mt-0 mt-4">
          <label className="text-gray-700 text-sm font-bold">スラッグ</label>
          <input
            type="text"
            className="mt-2 w-full text-slate-900 rounded shadow py-2 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="first:mt-0 mt-4">
          <label className="text-gray-700 text-sm font-bold">タイトル</label>
          <input
            type="text"
            className="mt-2 w-full text-slate-900 rounded shadow py-2 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="first:mt-0 mt-4">
          <label className="text-gray-700 text-sm font-bold">本文</label>
          <textarea className="resize-none mt-2 w-full text-slate-900 rounded shadow py-2 px-3 leading-tight focus:outline-none" />
        </div>

        <button
          type="submit"
          className="mt-4 py-2 px-4 rounded-md bg-orange-300 hover:bg-orange-400 duration-100"
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
