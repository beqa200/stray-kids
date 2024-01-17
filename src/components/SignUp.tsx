import { useForm } from "react-hook-form";
import { useUserContext } from "../context";
import { IoMdClose } from "react-icons/io";
export default function SignUp() {
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
      <form
        className={`  ${
          context.darkLight
            ? " bg-[#fff] text-[#1A1A1F] shadow-[0px_5px_30px_0px_#00000019]"
            : "bg-[#0e101c] text-[#FFF] shadow-[0px_5px_30px_0px_#5D37f3] "
        } absolute  top-52 w-[335px] py-10 rounded-xl flex flex-col items-center justify-center z-30  md:w-[480px] px-5 gap-4`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          onClick={() => {
            context.setSingUp(!context.singUp);
          }}
          className=" absolute right-5 top-3 cursor-pointer"
        >
          <IoMdClose size={24} />
        </div>{" "}
        <p className=" text-[18px] md:text-[24px] font-bold leading-8 mb-5">
          registration
        </p>
        <input
          className={` ${
            context.darkLight
              ? " bg-[#fff] text-[#1A1A1F]"
              : "bg-[#050505] text-[#FFF]"
          } w-full px-3.5  py-3 rounded-xl outline-[#5D37F3] border border-solid border-1.5 border-[#5D37F3]`}
          type="text"
        />
        <input
          className={` ${
            context.darkLight
              ? " bg-[#fff] text-[#1A1A1F]"
              : "bg-[#050505] text-[#FFF]"
          } w-full px-3.5  py-3 rounded-xl outline-[#5D37F3] border border-solid border-1.5 border-[#5D37F3]`}
          type="text"
        />
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
          <p>Alread have an account?</p>{" "}
          <p
            onClick={() => {
              context.setSingUp(false), context.setLogin(true);
            }}
            className=" text-[#5D37F3] "
          >
            Login
          </p>
        </div>
      </form>
      <div className=" w-full h-full opacity-[0.24] bg-black absolute top-0  right-0 z-20 ">
        {" "}
      </div>
    </div>
  );
}
