import { useEffect, useState } from "react";

const Content = () => {
  const [data, setData] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://url-three-sand.vercel.app/all");
    const jsonData = await res.json();
    setData(jsonData.data);
  };

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 3000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };
  const handleDelete = async (identifier) => {
    try {
      const res = await fetch(
        `https://url-three-sand.vercel.app/${identifier}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();

      if (result.success) {
        alert("Deleted successfully!");
        window.location.reload();

        setData(
          data.filter((url) => {
            return url.customUrl !== identifier && url.defaultId !== identifier;
          })
        );
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log("Delete failed", error);
      alert("Error deleting the url");
    }
  };
  return (
    <div className=" w-full flex flex-col gap-2">
      {data &&
        data.map((url, index) => {
          const shortUrl = url.customUrl || url.defaultId;
          return (
            <div
              key={index}
              className=" bg-blue-400 p-2 flex flex-col gap-2 rounded-lg"
            >
              <div className=" w-full flex gap-2">
                <div className="overflow-x-auto whitespace-nowrap hide-scrollbar rounded-lg">
                  <a
                    className="bg-blue-200 inline-block text-sm px-2 py-1 text-blue-700"
                    href={url.originalUrl}
                    target="_blank"
                  >
                    {url.originalUrl}
                  </a>
                </div>
                <button
                  className=" text-white text-sm px-2 py-1 bg-blue-500 rounded-md cursor-pointer"
                  onClick={() => handleCopy(url.originalUrl, index)}
                >
                  {copiedIndex === index ? "Copied" : "Copy"}
                </button>
              </div>
              <div className=" w-full flex gap-2">
                <div className="overflow-x-auto whitespace-nowrap hide-scrollbar rounded-lg">
                  <a
                    className="bg-blue-200 inline-block text-sm px-2 py-1 text-blue-700"
                    href={"https://url-three-sand.vercel.app/" + shortUrl}
                    target="_blank"
                  >
                    {"https://url-three-sand.vercel.app/" + shortUrl}
                  </a>
                </div>
                <button
                  className=" text-white text-sm px-2 py-1 bg-blue-500 rounded-md cursor-pointer"
                  onClick={() =>
                    handleCopy(
                      "https://url-three-sand.vercel.app/" + shortUrl,
                      index
                    )
                  }
                >
                  {copiedIndex === index ? "Copied" : "Copy"}
                </button>
                <button
                  className=" text-white text-sm px-2 py-1 bg-red-400 rounded-md cursor-pointer"
                  // onClick={() => handleDelete(url.customUrl || url.defaultId)}
                  onClick={() => handleDelete(shortUrl)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Content;
