import BaseButton from "@/components/common/BaseButton";
import BaseTextArea from "@/components/common/BaseTextArea";

const AddComment = () => {
  return (
    <>
      <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow md:max-w-xl lg:max-w-2xl">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
          Add New Comment
        </h2>
        <BaseTextArea
          placeholder="This was probably the best camp I've visited this past year, definitely recommend visiting any time soon."
          rows={5}
        />
        <div className="flex justify-center">
          <BaseButton text="Post Comment" btnType="filled" />
        </div>
      </div>
    </>
  );
};

export default AddComment;
