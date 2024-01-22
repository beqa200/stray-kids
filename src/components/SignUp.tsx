import { useUserContext } from "../context";
import { IoMdClose } from "react-icons/io";
export default function SignUp() {
  const context = useUserContext();

  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className={`  ${
          context.darkLight
            ? " bg-[#fff] text-[#1A1A1F] shadow-[0px_5px_30px_0px_#00000019]"
            : "bg-[#0e101c] text-[#FFF] shadow-[0px_5px_30px_0px_#5D37f3] "
        } absolute  top-52 w-[335px] py-10 rounded-xl flex flex-col items-center justify-center z-30  md:w-[480px] px-5 gap-4`}
      >
        <div
          onClick={() => {
            context.setSingUp(!context.singUp);
          }}
          className=" absolute right-5 top-3 cursor-pointer"
        >
          <IoMdClose size={24} />
        </div>{" "}
        <img src="/assets/tedo.png" alt="" />
        <button
          onClick={() => {
            context.setSingUp(false), context.setLogin(true);
          }}
          className=" w-full bg-[#5D37F3] text-[#ecda53] rounded-xl py-2.5 mt-4 text-[18px] md:text-[20px]"
        >
          TEDO 300ლ
        </button>
      </div>
      <div className=" w-full h-full opacity-[0.24] bg-black absolute top-0  right-0 z-20 ">
        {" "}
      </div>
    </div>
  );
}
