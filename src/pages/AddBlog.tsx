import Inputs from "../components/AddBlog/Inputs";
import PreviousButton from "../components/AddBlog/PreviousButton";
import Title from "../components/AddBlog/Title";
import UploadFile from "../components/AddBlog/UploadFile";

const AddBlog = () => {
  return (
    <>
      <PreviousButton />
      <div className="relative mt-10 max-w-[600px] mx-auto">
        <Title />
        <UploadFile />
        <Inputs />
      </div>
    </>
  );
};

export default AddBlog;
