const Content = () => {
  const repeatCount = 10;
  return (
    <div className=" w-full flex flex-col gap-2">
      {Array.from({ length: repeatCount }).map((_, index) => (
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
                lxcvbklkjhgckljhgvklkjhgfvvjkjhgfvvjkjhggjkjhghjkjh Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Blanditiis cum
                voluptatem tenetur, excepturi possimus repudiandae distinctio
                quidem! Accusamus, ullam, id illo iusto, reprehenderit amet
                inventore est beatae quaerat enim impedit.lorm
              </a>
            </div>
            <button className=" text-white text-sm px-2 py-1 bg-blue-500 rounded-md">
              copy
            </button>
          </div>
          <div className=" w-full flex gap-2">
            <div className="overflow-x-auto whitespace-nowrap hide-scrollbar rounded-lg">
              <a
                className="bg-blue-200 inline-block text-sm px-2 py-1 text-blue-700"
                href=""
              >
                jkjhggjkjhgh
              </a>
            </div>
            <button className=" text-white text-sm px-2 py-1 bg-blue-500 rounded-md">
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
