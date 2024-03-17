import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";
import UserCommentsModal from "../components/UserCommentsModal";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const UserPosts = [
  {
    id: 1,
    Name: "Rakesh Kumar",
    userName: "rakesh_kumar",
    postPicture: [
      {
        id: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6uYLiwT_M6bmdgtE11jlS2OxfLUe7jjlvIQO5EHoYQ&s",
      },
    ],
    postVideo: [],
    postCaption: "hello my connect connections",
    postLocation: "India",
    postDate: "01-03-2024",
    postTime: "12:09",
    am_or_pm: "PM",
  },
  {
    id: 2,
    Name: "Sunil Sharma",
    userName: "sunil1001",
    postPicture: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/1208015/pexels-photo-1208015.jpeg?cs=srgb&dl=pexels-rahul-shah-1208015.jpg&fm=jpg",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/1215695/pexels-photo-1215695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    ],
    postVideo: [],
    postCaption: "Always Rock 🔥",
    postLocation: "Hyderabad",
    postDate: "01-03-2024",
    postTime: "10:09",
    am_or_pm: "AM",
  },
];

const UserPostSection = () => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleCommentClick = (user) => {
    setComments([
      { user: "User1", comment: "Awesome post!" },
      { user: "User2", comment: "Great picture!" },
      { user: "User3", comment: "Great picture!" },
      { user: "User4", comment: "Great picture!" },
      { user: "User5", comment: "Great picture!" },
      { user: "User6", comment: "Great picture!" },
      { user: "User7", comment: "Great picture!" },
      { user: "User8", comment: "Great picture!" },
      { user: "User9", comment: "Great picture!" },
      { user: "User10", comment: "Great picture!" },
      { user: "User11", comment: "Great picture!" },
      { user: "User12", comment: "Great picture!" },
    ]);
    setSelectedUser(user);
    setShowComments(true);
  };

  return (
    <>
      {UserPosts.map((user) => (
        <div
          className="user_post_section border-b border-[#928c8cb1] pb-3 mb-6"
          key={user.id}
        >
          <div className="user_post-details flex items-center mb-5">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="User Profile"
              className="w-12 h-12 rounded-full mr-2"
            />
            <div className="user_name">
              <p className="text-white text-md">{user.userName}</p>
              <p className="text-[#979696] text-sm">{user.postLocation}</p>
            </div>
          </div>

          <Splide
            options={{
              arrows: user.postPicture.length > 1,
              pagination: false,
            }}
            aria-label="user post images"
          >
            {user.postPicture.map((picture) => (
              <SplideSlide key={picture.id}>
                <div className="user_post w-full h-full flex items-center justify-center border border-[#c1bfbfae]">
                  <img
                    src={picture.url}
                    alt="user_post"
                    className="rounded-lg w-full h-full"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>

          <div className="user_like_and_comment_button py-3 flex items-center gap-4">
            <button className="like_button" onClick={handleLikeClick}>
              {liked ? (
                <FaHeart className="like_icon text-xl md:text-4xl text-red-700" />
              ) : (
                <FaRegHeart className="like_icon text-xl md:text-4xl" />
              )}
            </button>
            <button
              className="comment_button"
              onClick={() => handleCommentClick(user)}
            >
              <FaRegComment className="comment_icon text-xl md:text-4xl" />
            </button>
          </div>
          <div className="user_caption flex gap-5 items-center justify-start">
            <p className="text-white text-lg">{user.userName}</p>
            <p className="text-white text-sm">{user.postCaption}</p>
          </div>

          {showComments && (
            <UserCommentsModal
              user={selectedUser}
              comments={comments}
              setComments={setComments}
              setShowComments={setShowComments}
            />
          )}
        </div>
      ))}
    </>
  );
};

const MainCenterDiv = () => {
  return (
    <div className="MainCenter overflow-y-auto flex-1 p-4 w-full">
      <UserPostSection />
    </div>
  );
};

export default MainCenterDiv;
