import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-60  pl-11 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="pt-4 pl-2 text-lg w-1/4">{overview}</p>
      <div className="py-5 ">
        <button className="hover:bg-opacity-80 px-6 py-2 bg-white text-black m-2 rounded-md">
          {" "}
          ▶️ Play
        </button>
        <button className="px-6 py-2 bg-zinc-500 rounded-md font-bold">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
