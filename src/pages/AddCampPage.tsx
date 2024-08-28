import AddCampLayout from "@/layouts/AddCampLayout";
import AddForm from "@/components/specific/add_camp_page/AddForm";
const AddCampPage = () => {
  return (
    <>
      <AddCampLayout form={<AddForm />}/>
    </>
  );
};

export default AddCampPage;
