interface commentProps {
  user: string;
  comment: string;
  time: string;
}
const Comment: React.FC<commentProps> = ({ user, comment, time }) => {
  return (
    <>
      <div className="container p-5">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <h1 className="font-bold">{user}</h1>
            <h1>{time}</h1>
          </div>
          <p className="max-w-3/4">{comment}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
