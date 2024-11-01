import React from "react";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      {/* Section One: Overview */}
      <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <h1 className="text-5xl font-bold text-blue-950">Overview</h1>
        <p className="max-w-lg mt-4 text-lg text-black">
          This is an overview section that briefly describes the main content of
          our website.
        </p>
        <div className="flex mt-8 space-x-4">
          <div className="w-64 h-40 p-4 border shadow-md">Card 1</div>
          <div className="w-64 h-40 p-4 border shadow-md">Card 2</div>
          <div className="w-64 h-40 p-4 border shadow-md">Card 3</div>
        </div>
      </section>

      {/* Section Two: Overview About */}
      <section className="flex flex-col justify-center h-screen px-4">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <img
            src="https://via.placeholder.com/400"
            alt="About"
            className="object-cover w-full h-full"
          />
          <div>
            <h1 className="pb-2 text-5xl font-bold border-b-2 text-blue-950">
              Overview About
            </h1>
            <p className="mt-4 text-lg text-black">
              This section provides detailed information about our offerings and
              mission.
            </p>
            <button className="px-6 py-2 mt-6 text-white rounded-md bg-blue-950">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Section Three */}
      <section className="flex flex-col justify-center h-screen px-4">
        {/* Row One */}
        <div className="grid items-center grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div className="p-6 bg-blue-300 rounded-lg">
            <h1 className="text-4xl font-bold text-blue-950">
              Section Three Title
            </h1>
            <p className="mt-4 text-white">
              Brief description that aligns with the image on the side.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/400"
            alt="Section Three Image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Row Two */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 text-center border rounded-lg">
            <div className="mb-4 text-4xl">🎉</div>
            <h3 className="text-xl font-semibold">Feature 1</h3>
            <p className="text-gray-600">Description of feature 1.</p>
          </div>
          <div className="p-6 text-center border rounded-lg">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="text-xl font-semibold">Feature 2</h3>
            <p className="text-gray-600">Description of feature 2.</p>
          </div>
          <div className="p-6 text-center border rounded-lg">
            <div className="mb-4 text-4xl">🌟</div>
            <h3 className="text-xl font-semibold">Feature 3</h3>
            <p className="text-gray-600">Description of feature 3.</p>
          </div>
          <div className="p-6 text-center border rounded-lg">
            <div className="mb-4 text-4xl">💡</div>
            <h3 className="text-xl font-semibold">Feature 4</h3>
            <p className="text-gray-600">Description of feature 4.</p>
          </div>
        </div>
      </section>

      {/* Section Four: Program */}
      <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <h1 className="text-5xl font-bold text-blue-950">Program</h1>
        <p className="max-w-lg mt-4 text-lg text-black">
          Here are some highlights from our programs.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Gallery 1"
              className="object-cover w-full h-full"
            />
            <p className="mt-2 text-gray-600">Gallery Caption 1</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Gallery 2"
              className="object-cover w-full h-full"
            />
            <p className="mt-2 text-gray-600">Gallery Caption 2</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Gallery 3"
              className="object-cover w-full h-full"
            />
            <p className="mt-2 text-gray-600">Gallery Caption 3</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Gallery 4"
              className="object-cover w-full h-full"
            />
            <p className="mt-2 text-gray-600">Gallery Caption 4</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Gallery 5"
              className="object-cover w-full h-full"
            />
            <p className="mt-2 text-gray-600">Gallery Caption 5</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Gallery 6"
              className="object-cover w-full h-full"
            />
            <p className="mt-2 text-gray-600">Gallery Caption 6</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
