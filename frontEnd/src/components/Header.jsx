import logo from "../assets/favicon.png";

function Header() {
  return (
    <div className="w-full  mx-auto py-1 mt-2 px-[5vw]">
      <div className=" w-full flex justify-between items-center">
        <a href="https://portfolio-nu-ten-59.vercel.app/" target="_blank">
          <img
            src={logo}
            alt=""
            className=" h-10 w-auto bg-white rounded-full p-2"
          />
        </a>
        <h1 className=" font-semibold text-white">URL Shortener</h1>
        <h1 className="hidden sm:block font-extrabold text-3xl text-white">
          <a href="https://portfolio-nu-ten-59.vercel.app/" target="_blank">
            NewRL
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Header;
