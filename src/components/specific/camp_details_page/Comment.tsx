interface commentProps {
  user: string;
  comment: string;
  time: string;
}
const Comment: React.FC<commentProps> = ({ user, comment, time }) => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex">
            <h1>{user}</h1>
            <h1>{time}</h1>
          </div>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
