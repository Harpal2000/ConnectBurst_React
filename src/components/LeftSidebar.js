import React from "react";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaCompass,
  FaSearch,
  FaEnvelope,
  FaBell,
  FaUser,
} from "react-icons/fa";

const UserProfileSection = () => {
  return (
    <div className="UserProfileSection flex flex-col items-start gap-3 bg-[#242424a7] rounded-[20px] p-4 ">
      <div className="flex items-center mb-2">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="User Profile"
          className="w-20 h-20 rounded-full mr-2"
        />
        <div>
          <p className="text-white">Harpal Singh</p>
          <p className="text-[#979696] text-sm">@harpal_ramgariha_</p>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap items-center justify-center w-full">
        <div className="Posts flex flex-col items-center">
          <h2 className="text-white text-lg">23</h2>
          <p className="text-[#979696] text-sm">Posts</p>
        </div>
        <div className="Followers flex flex-col items-center">
          <h2 className="text-white text-lg">10K</h2>
          <p className="text-[#979696] text-sm">Followers</p>
        </div>
        <div className="Following flex flex-col items-center">
          <h2 className="text-white text-lg">140</h2>
          <p className="text-[#979696] text-sm">Following</p>
        </div>
      </div>
    </div>
  );
};
const SideMenu = () => {
  return (
    <div className="side_menu my-5 p-4 flex flex-col gap-5 bg-[#242424a7] rounded-[20px]">
      <Link to="#">
        <div className="side_items flex items-center gap-5 bg-[#293941] rounded-md py-2 px-2">
          <FaVideo className="text-white text-xl" />
          <p className="text-md">Post Video</p>
        </div>
      </Link>
      <Link to="#">
        <div className="side_items flex items-center gap-5 p-2 hover:bg-[#494c4eba] rounded-md">
          <FaCompass className="text-white text-xl" />
          <p className="text-md">Explore</p>
        </div>
      </Link>
      <Link to="#">
        <div className="side_items flex items-center gap-5 p-2 hover:bg-[#494c4eba] rounded-md">
          <FaSearch className="text-white text-xl" />
          <p className="text-md">Search</p>
        </div>
      </Link>
      <Link to="#">
        <div className="side_items flex items-center gap-5 p-2 hover:bg-[#494c4eba] rounded-md">
          <FaEnvelope className="text-white text-xl" />
          <p className="text-md">Messages</p>
        </div>
      </Link>
      <Link to="#">
        <div className="side_items flex items-center gap-5 p-2 hover:bg-[#494c4eba] rounded-md">
          <FaBell className="text-white text-xl" />
          <p className="text-md">Notification</p>
        </div>
      </Link>
      <Link to="#">
        <div className="side_items flex items-center gap-5 p-2 hover:bg-[#494c4eba] rounded-md">
          <FaUser className="text-white text-xl" />
          <p className="text-md">Profile</p>
        </div>
      </Link>
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <div className="left-sidebar w-full lg:w-1/5 xl:w-1/5 fixed h-full overflow-y-auto">
      <UserProfileSection />
      <SideMenu />
    </div>
  );
};

export default LeftSidebar;
