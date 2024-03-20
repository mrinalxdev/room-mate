import React from "react";

const page = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-20 px-10">
        <div className="flex flex-col items-center gap-8 md:w-1/3">
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-xl">Upload a photo of your room</h3>
            {/* Upload Component  */}
          </div>

          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-xl">Select your room type</h3>
            {/* Select Component  */}
          </div>

          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-xl">Select your theme</h3>
            {/* Theme Component  */}
          </div>

          {/* Generate Button */}
        </div>
        <div className="md:w-2/3 flex flex-col items-center pb-10">
          <div className="md:flex flex-col hidden gap-5 text-center">
            <h1 className="text-6xl font-bold ">
              Redesign your <span className="text-blue-500">room </span> in just few clicks
            </h1>
            <p className="text-gray-500">
              Upload a room, specify the room type, and select your room theme
              to redesign
            </p>
          </div>
          {/* Preview Component */}
        </div>
      </div>
    </div>
  );
};

export default page;
