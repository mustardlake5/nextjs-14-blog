"use client";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-red-100 border-t-4 border-red-500 text-red-700 my-4 rounded shadow-md mx-auto p-2 text-center">
      <h3 className="font-bold">エラーが発生しました。</h3>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200 mt-2"
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
