import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

const SearchBar = () => {
  const { searchData, setSearchData } = useContext(MyContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };
  console.log(searchData);
  return (
    <div className=" w-full p-2">
      <form action="" className="flex flex-col items-center pt-8 gap-2">
        <input
          name="originUrl"
          value={searchData.originUrl}
          onChange={handleChange}
          type="text"
          placeholder="Enter the url: "
          className=" p-2 rounded-lg w-[90%] border border-white outline-none text-white"
        />
        <input
          name="shotUrl"
          value={searchData.shotUrl}
          onChange={handleChange}
          type="text"
          placeholder="Enter your custom url name: (optional)"
          className=" p-2 rounded-lg w-[90%] border border-white outline-none text-purple-100"
        />
        <button type="submit" className=" py-2 px-4 rounded-xl bg-white">
          Create
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
