import { SubmitHandler, useForm } from "react-hook-form";
import { useUserContext } from "../context";
import { IoMdClose } from "react-icons/io";

type FormData = {
  email: string;
  // Add other fields if needed
};

export default function Login() {
  const context = useUserContext();

  const {
    watch,
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const enteredEmail = data.email;

    // Your email validation logic here
    const isEmailValid = /^[a-zA-Z0-9._-]+@redberry\.ge$/.test(enteredEmail);

    console.log("isEmailValid:", isEmailValid);

    if (isEmailValid) {
      context.setLoginEmail(false);
    } else {
      setError("email", {
        type: "manual",
        message: "Invalid email format or not from redberry.ge domain",
      });
    }
  };
  const handleEmailChange = () => {
    clearErrors("email");
  };
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      {context.loginEmail ? (
        <div
          className={`  ${
            context.darkLight
              ? " bg-[#fff] text-[#1A1A1F] shadow-[0px_5px_30px_0px_#00000019] "
              : "bg-[#0e101c] text-[#FFF] shadow-[0px_5px_30px_0px_#5D37f3] "
          } absolute  top-52 w-[335px] py-10 rounded-xl flex flex-col items-center justify-center z-30  md:w-[480px]`}
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
            className={`   w-full px-5 flex flex-col items-start justify-between gap-7 `}
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-[12px] md:text-[14px] font-medium leading-5 mb-1">
              ელ-ფოსტა
            </p>
            <div className="w-full relative">
              <input
                className={` ${
                  context.darkLight
                    ? " bg-[#fff] text-[#1A1A1F]"
                    : "bg-[#050505] text-[#FFF]"
                } w-full px-3.5  py-3 rounded-xl outline-[#5D37F3] border border-solid border-1.5 border-[#5D37F3] `}
                type="text"
                {...register("email", {
                  required: "საჭიროა ელ.ფოსტა",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@redberry\.ge$/,
                    message:
                      "ელ.ფოსტის ფორმატი არასწორია ან არ არის redberry.ge დომენიდან",
                  },
                })}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <p className="text-red-500 absolute text-[12px] md:text-[14px]">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className=" w-full bg-[#5D37F3] text-[#fff] rounded-xl py-2.5 mt-4 text-[14px] md:text-[16px]"
            >
              შესვლა
            </button>
            <div className="flex flex-row items-center justify-center gap-3 mt-4 w-full text-[14px] md:text-[16px]">
              {" "}
              <p>Don’t have an account?</p>{" "}
              <p
                onClick={() => {
                  context.setSingUp(true), context.setLogin(false);
                }}
                className=" text-[#5D37F3] "
              >
                Sign Up
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <img src="" alt="" />
        </div>
      )}
      <div className=" w-full h-full opacity-[0.24] bg-black absolute top-0  right-0 z-20 ">
        {" "}
      </div>
    </div>
  );
}
