import { useEffect, useState } from "react";

const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://url-three-sand.vercel.app/all");
    const jsonData = await res.json();
    setData(jsonData);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <div className=" w-full flex flex-col gap-2">
      {data.map((url, index) => (
        <div
          key={index}
          className=" bg-blue-400 p-2 flex flex-col gap-2 rounded-lg"
        >
          <div className=" w-full flex gap-2">
            <div className="overflow-x-auto whitespace-nowrap hide-scrollbar rounded-lg">
              <a
                className="bg-blue-200 inline-block text-sm px-2 py-1 text-blue-700"
                href=""
              >
                {url.originalUrl}
              </a>
            </div>
            <button
              className=" text-white text-sm px-2 py-1 bg-blue-500 rounded-md"
              onClick={() => handleCopy(url.originalUrl)}
            >
              copy
            </button>
          </div>
          <div className=" w-full flex gap-2">
            <div className="overflow-x-auto whitespace-nowrap hide-scrollbar rounded-lg">
              <a
                className="bg-blue-200 inline-block text-sm px-2 py-1 text-blue-700"
                href=""
              >
                {url.customUrl}
              </a>
            </div>
            <button
              className=" text-white text-sm px-2 py-1 bg-blue-500 rounded-md"
              onClick={() => handleCopy(url.customUrl)}
            >
              copy
            </button>
            <button className=" text-white text-sm px-2 py-1 bg-red-400 rounded-md">
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
