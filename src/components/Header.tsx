import { useUserContext } from "../context";

export default function Header() {
  const context = useUserContext();
  return (
    <header
      className={` ${
        context.darkLight
          ? " bg-[#fff] text-[#1A1A1F] border-[#E4E3EB]"
          : "bg-[#0e101c] text-[#FFF]  border-[#404049]"
      } flex flex-col items-center justify-between w-full md:h-20 px-5 py-5 md:px-10 xl:px-[76px] border-b border-solid `}
    >
      <div className=" flex flex-row items-center justify-between w-full">
        <img
          className="w-[80px] md:w-[150px]"
          src={` ${
            context.darkLight
              ? " ./assets/LOGO-02 3.png "
              : "./assets/newLogo.svg"
          }`}
          alt=""
        />

        <div className="flex flex-row items-center justify-between w-[130px] md:w-[180px]">
          <div className={`bg-[#85858D] w-10 h-5 rounded-xl relative `}>
            <button
              onClick={() => {
                context.setDarkLight(!context.darkLight);
              }}
              className={` ${
                context.darkLight ? "left-1 top-[3px]" : " right-1 top-[3px]"
              }  absolute  w-3.5 h-3.5  rounded-full bg-white  cursor-pointer`}
            ></button>
          </div>

          <button
            onClick={() => {
              context.setLogin(!context.login);
            }}
            className={`px-4 py-2 bg-[#5D37f3] rounded-lg text-[12px] font-medium cursor-pointer text-[#fff]  md:px-5 md:py-2.5 md:text-[14px]`}
          >
            შესვლა
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full py-2 md:hidden">
        <p>გრიგოლია</p> <p>შეგიძლია </p> <p>დასქრინო</p>
      </div>
    </header>
  );
}
