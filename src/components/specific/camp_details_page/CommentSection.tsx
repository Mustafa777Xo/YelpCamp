import { useState } from "react";
import BaseButton from "@/components/common/BaseButton";
import Comment from "./Comment";
import AddComment from "./AddComment"; // Assuming AddComment is the component to display the form
import { FaCommentDots } from "react-icons/fa";

const comments = [
  {
    id: 1,
    user: "Adam Jones",
    comment:
      "Honestly one of the best experiences ever. took us a while to figure out how to get there but it was amazing!",
    time: "13h ago",
  },
  {
    id: 2,
    user: "Isaac Dylan",
    comment:
      "Traveling changes you as a person. you gain more perspective. this is the spot to do that",
    time: "1 day ago",
  },
  {
    id: 3,
    user: "Hudson Luca",
    comment:
      "Definitely recommend going there. not too far and not a lot of people to in the experience.",
    time: "3 days ago",
  },
];

const CommentSection = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleAddCommentClick = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className="container border rounded p-2 md:p-10 mx-auto">
        {comments.map((comment, index) => (
          <div key={comment.id}>
            <Comment
              user={comment.user}
              comment={comment.comment}
              time={comment.time}
            />
            {index < comments.length - 1 && <hr />}{" "}
            {/* Divider except after last comment */}
          </div>
        ))}
        <div className="flex justify-end">
          <div onClick={handleAddCommentClick}>
            <BaseButton
              text="Leave a Review"
              icon={FaCommentDots}
              btnType="filled"
            />
          </div>
        </div>
      </div>

      {/* Overlay for Add Comment */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
            <AddComment />
            <button
              onClick={closeOverlay}
              className="mt-4 w-full bg-gray-200 py-2 rounded text-black hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentSection;
