import BaseButton from "@/components/common/BaseButton";
import BaseTextArea from "@/components/common/BaseTextArea";
import BaseTextField from "@/components/common/BaseTextfield";

const AddForm = () => {
  return (
    <>
      <div className="flex flex-col gap-6 lg:w-1/2 ">
        <h1 className="font-bold text-2xl">Add New Campground</h1>

        <BaseTextField
          label="Campground Name"
          placeholder="Seven Sisters Waterfall"
          type="text"
        />
        <BaseTextField label="Price" placeholder="$466" type="number" />
        <BaseTextArea
          placeholder="eg. The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Gevrangerfjorden in Stranda Municipality in Møre og Romsdal county, Norway."
          rows={8}
        />
        <BaseTextField
          label="Image"
          placeholder="Seven Sisters Waterfall"
          type="file"
        />
        <BaseButton text="Add Campground" btnType="filled" />
      </div>
    </>
  );
};

export default AddForm;
