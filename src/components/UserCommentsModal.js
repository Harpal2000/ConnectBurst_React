import React, { useState } from "react";
import {FaTimes } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const UserCommentsModal = ({ comments, setComments,setShowComments,user }) => {
  const [newComment, setNewComment] = useState("");

  const handlePostComment = () => {
    setComments([...comments, { user: "Current User", comment: newComment }]);
    setNewComment("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black p-4 rounded-lg w-[50%] h-[80%]">
        <button
          className="absolute top-5 right-5 text-gray-500 cursor-pointer"
          onClick={() => setShowComments(false)}
        >
          <FaTimes className="text-4xl" />
        </button>
        <div className="modal_body flex gap-5 w-full h-full">
          <div className="comment_modal_picture w-6/12 flex flex-col items-center justify-center">
           <Splide
            options={{
              arrows: user.postPicture.length > 1,
              pagination: false,
            }}
            aria-label="user post images"
          >
            {user.postPicture.map((picture) => (
              <SplideSlide key={picture.id}>
                  <img
                    src={picture.url}
                    alt="user_post"
              className="rounded-lg w-full h-full"
                  />
              </SplideSlide>
            ))}
          </Splide>
          </div>
          <div className="comment_modal_comments w-6/12">
            <div className="user_details flex items-center mb-5 border-b border-white w-full pb-2">
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
            <div className="comment_users w-full flex flex-col justify-between items-start">
              <div className="comments h-[25rem] w-full overflow-y-auto">
                {comments.map((comment, index) => (
                  <div key={index} className="comment flex items-center mb-5">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                      alt="User Profile"
                      className="w-12 h-12 rounded-full mr-2"
                    />
                    <div className="user_name flex gap-3">
                      <p className="text-white text-md">{comment.user}</p>
                      <p className="text-[#979696] text-sm">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="comment_input">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handlePostComment}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCommentsModal;
