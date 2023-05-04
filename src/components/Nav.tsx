import React from "react";
import {
  AiFillMessage,
  BiLibrary,
  FaGamepad,
  FaUserFriends,
} from "react-icons/all";

const Nav = () => {
  return (
    <section className="flex flex-col h-screen justify-center w-1/4 px-4 font-bold">
      <div className="flex flex-row gap-4 p-2 relative">
        <span className="block absolute top-1/4 left-1 w-1 h-6 rounded-full bg-blue-500 shadow-[5px_0_7px_1px_rgba(0,0,0,1)] shadow-blue-700"></span>
        <i className="left-border pl-4 text-2xl text-blue-500">
          <FaGamepad />
        </i>
        <h2 className="text-blue-500">Game Store</h2>
      </div>
      <div className="flex flex-row gap-4 p-2 relative">
        <span className="block absolute top-1/4 left-1 w-1 h-6 rounded-full bg-white"></span>
        <i className="left-border pl-4 text-2xl">
          <BiLibrary />
        </i>
        <h2>Library</h2>
      </div>
      <div className="flex flex-row gap-4 p-2 relative">
        <span className="block absolute top-1/4 left-1 w-1 h-6 rounded-full bg-white"></span>
        <i className="left-border pl-4 text-2xl">
          <AiFillMessage />
        </i>
        <h2>Community</h2>
      </div>
      <div className="flex flex-row gap-4 p-2 relative">
        <span className="block absolute top-1/4 left-1 w-1 h-6 rounded-full bg-white"></span>
        <i className="left-border pl-4 text-2xl">
          <FaUserFriends />
        </i>
        <h2>Friends</h2>
      </div>
    </section>
  );
};

export default Nav;
