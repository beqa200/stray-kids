import { useUserContext } from "../context";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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

        <div className="flex flex-row items-center justify-between w-[180px] md:w-[380px]">
          <div className="flex flex-row items-center justify-between  relative">
            <p
              onClick={() => context.setFontMenu(!context.fontMenu)}
              className="flex flex-row items-center gap-2"
            >
              <p className="hidden md:flex">{context.findFont}</p>{" "}
              <MdOutlineKeyboardArrowDown size={20} />
            </p>
            {context.fontMenu && (
              <div
                className={` ${
                  context.darkLight
                    ? "bg-[#fff]  shadow-[0px_5px_30px_0px_#00000019]"
                    : "bg-[#0e101c]  shadow-[0px_5px_30px_0px_#5D37f3]"
                } flex  px-5  py-2.5 flex-col items-center justify-between gap-2  absolute top-12 right-[-110px] md:right-0`}
              >
                <p
                  onClick={() => {
                    context.setFindFont(" გრიგოლია"),
                      context.setFontMenu(false);
                  }}
                >
                  გრიგოლია
                </p>{" "}
                <p
                  onClick={() => {
                    context.setFindFont("შეგიძლია"), context.setFontMenu(false);
                  }}
                >
                  შეგიძლია{" "}
                </p>{" "}
                <p
                  onClick={() => {
                    context.setFindFont(" დასქრინო"),
                      context.setFontMenu(false);
                  }}
                >
                  დასქრინო
                </p>
              </div>
            )}
          </div>

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
    </header>
  );
}
