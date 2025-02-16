import { useContext, useState } from "react";
import { MyContext } from "../contexts/MyContext";

const SearchBar = () => {
  const { searchData, setSearchData } = useContext(MyContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      customUrl: searchData.shotUrl,
      originalUrl: searchData.originUrl,
    };
    try {
      const response = await fetch("https://url-three-sand.vercel.app/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        alert("URL created successfully");
        setSearchData({ originUrl: "", shotUrl: "" });
        window.location.reload();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log("Error creating URL: ", error);
      alert("Failed to create URL");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className=" w-full p-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center pt-8 gap-2"
      >
        <input
          name="originUrl"
          value={searchData.originUrl}
          onChange={handleChange}
          type="text"
          placeholder="Enter the original url: "
          className=" p-2 rounded-lg w-[90%] border border-white outline-none text-white"
        />
        <input
          name="shotUrl"
          value={searchData.shotUrl}
          onChange={handleChange}
          type="text"
          placeholder="Custom url or text (optional):"
          className=" p-2 rounded-lg w-[90%] border border-white outline-none text-purple-100"
        />
        <button
          type="submit"
          className=" py-2 px-4 rounded-xl bg-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
