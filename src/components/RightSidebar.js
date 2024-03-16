import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const LatestUserMessages = () => {
  return (
    <div className="messages bg-[#242424a7] rounded-[20px] p-4">
      <h1 className="text-2xl text-white font-semibold border-b border-white pb-2 ">
        New Messages
      </h1>
      <div className="user_messages py-3 flex flex-col gap-6">
        <div className="user_post-details flex items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="User Profile"
            className="w-12 h-12 rounded-full mr-2"
          />
          <div className="user_name">
            <p className="text-white text-md">Harpal Singh</p>
            <p className="text-[#979696] text-sm">how are you ?</p>
          </div>
        </div>
        <div className="user_post-details flex items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="User Profile"
            className="w-12 h-12 rounded-full mr-2"
          />
          <div className="user_name">
            <p className="text-white text-md">Harpal Singh</p>
            <p className="text-[#979696] text-sm">how are you ?</p>
          </div>
        </div>
        <div className="user_post-details flex items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="User Profile"
            className="w-12 h-12 rounded-full mr-2"
          />
          <div className="user_name">
            <p className="text-white text-md">Harpal Singh</p>
            <p className="text-[#979696] text-sm">how are you ?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CurrentUserProfile = () => {
  return (
    <div className="current_user_profile flex items-center">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
        alt="User Profile"
        className="w-20 h-20 rounded-full mr-2"
      />
      <div className="user_details flex gap-7 items-center">
        <div className="user_name_and_bio w-10/12 flex flex-col gap-1">
            <p className="text-white text-md">harpal_ramgariha_</p>
        <p className="text-[#979696] text-sm">
          🙏🏻ਡਰ ਵਾਹਿਗੁਰੂ ਦਾ 🏡ਤਰਨ ਤਾਰਨ 
        </p>
        </div>
        <div className="logout cursor-pointer w-2/12">
            <AiOutlineLogout className="text-2xl text-red-700" />
        </div>
      </div>
    </div>
  );
};

const Terms = () =>{
return (
   <div className="terms flex flex-col gap-3">
     <p>About
Help
Press
API
Jobs
Privacy
Terms
Locations
Language
HS Verified</p>
<p>
© 2024 CONNECT BURST FROM HS</p>
   </div>
);
}

const RightSidebar = () => {
  return (
    <div className="RightSidebar flex flex-col gap-7 font-poppins fixed w-full lg:w-[27%] xl:w-[28%] h-full overflow-y-auto">
      <LatestUserMessages />
      <CurrentUserProfile />
      <Terms/>
    </div>
  );
};

export default RightSidebar;
