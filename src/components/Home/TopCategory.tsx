const TopCategories = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10">
        <h2 className="text-4xl font-bold mb-8">Top Categories</h2>
        <div className="-m-1 flex flex-wrap flex-col md:flex-row md:-m-2">
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-md"
                src="https://i.ibb.co.com/DkGqLbw/Cute-Kids-Dress2.png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-md"
                src="https://i.ibb.co.com/dMrKxfG/a6159d20cfcd2d293b6602832170ef29-jpg-720x720q80-jpg.webp"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-md"
                src="https://i.ibb.co.com/q7hRxbk/ff7c01fef28934ed8036b73c32bdc124-jpg-720x720q80-jpg.webp"
              />
            </div>
          </div>
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-md"
                src="https://i.ibb.co.com/PckprZv/3208ac133931ce137c5b611bd37eee9f-jpg-720x720q80-jpg.webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-md"
                src="https://i.ibb.co.com/K9x6c80/2e3ab5ceccd101988eb5515eddeb2956-jpg-720x720q80-jpg.webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-md"
                src="https://i.ibb.co.com/XJv17nJ/c8014e661b16fa2b3c597e48276996fd-jpg-720x720q80-jpg.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCategories;
