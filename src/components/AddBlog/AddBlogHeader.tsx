import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { useUserContext } from "../../context";

const AddBlogHeader = () => {
  const context = useUserContext();

  console.log(context.darkLight);

  return (
    <div
      className={` ${
        !context.darkLight ? "bg-[rgb(14, 16, 28)]" : "bg-white"
      } py-7 w-full text-center items-center flex justify-center mb-9 border-b-2 border-[#E4E3EB]`}
    >
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="cursor-pointer " />
      </Link>
    </div>
  );
};

export default AddBlogHeader;
