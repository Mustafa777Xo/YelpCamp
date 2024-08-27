import BaseButton from "@/components/common/BaseButton";
import Comment from "./Comment";
import { FaCommentDots } from "react-icons/fa";
const comments = [
  {
    id: 1,
    user: "Adam Jones",
    comment:
      "Honestly one of the best experiences ever. took us a while to figure outow to get there but it was amazing!",
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
  return (
    <>
      <div className="container border rounded p-10">
        {comments.map((comment, index) => (
          <div key={comment.id}>
            <Comment
              user={comment.user}
              comment={comment.comment}
              time={comment.time}
            />
            {index < comments.length - 1 && <hr />}{" "}
            {/* Add divider except after the last comment */}
          </div>
        ))}

        <BaseButton
          text="Leave a Review"
          icon={FaCommentDots}
          btnType="filled"
        />
      </div>
    </>
  );
};

export default CommentSection;
