import { useForm } from "react-hook-form";
import { useUserContext } from "../context";
import { IoMdClose } from "react-icons/io";
export default function Login() {
  const context = useUserContext();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};

  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className={`  ${
          context.darkLight
            ? " bg-[#fff] text-[#1A1A1F]"
            : "bg-[#0e101c] text-[#FFF]"
        } absolute  top-52 w-[335px] py-10 rounded-xl flex flex-col items-center justify-center z-20  md:w-[480px]`}
      >
        <div
          onClick={() => {
            context.setLogin(!context.login);
          }}
          className=" absolute right-5 top-3 cursor-pointer"
        >
          <IoMdClose size={24} />
        </div>{" "}
        <p className=" text-[18px] md:text-[24px] font-bold leading-8 mb-5">
          შესვლა
        </p>
        <form
          className={`   w-full px-5 flex flex-col items-start justify-between `}
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-[12px] md:text-[14px] font-medium leading-5 mb-1">
            ელ-ფოსტა
          </p>
          <input
            className={` ${
              context.darkLight
                ? " bg-[#fff] text-[#1A1A1F]"
                : "bg-[#050505] text-[#FFF]"
            } w-full px-3.5  py-3 rounded-xl outline-[#5D37F3] border border-solid border-1.5 border-[#5D37F3]`}
            type="text"
          />

          <button className=" w-full bg-[#5D37F3] text-[#fff] rounded-xl py-2.5 mt-4 text-[14px] md:text-[16px]">
            შესვლა
          </button>
          <div className="flex flex-row items-center justify-center gap-3 mt-4 w-full text-[14px] md:text-[16px]">
            {" "}
            <p>Don’t have an account?</p>{" "}
            <p className=" text-[#5D37F3] ">Sign Up</p>
          </div>
        </form>
      </div>
      <div className=" w-full h-full opacity-[0.24] bg-black absolute top-0  right-0 z-0 ">
        {" "}
      </div>
    </div>
  );
}
