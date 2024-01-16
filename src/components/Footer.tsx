import { useUserContext } from "../context";

export default function Footer() {
  const context = useUserContext();
  return (
    <div
      className={`   ${
        context.darkLight
          ? " bg-[#fff] text-[#1A1A1F] border-[#E4E3EB]"
          : "bg-[#0e101c] text-[#FFF] border-[#404049]"
      } flex flex-col items-start justify-between  w-full  gap-7  border-t border-solid  py-5 px-5 md:px-10 xl:px-[76px] `}
    >
      <img
        className="w-[80px] md:w-[150px]"
        src={` ${
          context.darkLight
            ? " ./assets/LOGO-02 3.png "
            : "./assets/newLogo.svg"
        }`}
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
        maiores provident molestiae quisquam odit illo suscipit asperiores
        possimus tenetur nihil fugit, veniam assumenda iste laboriosam. Impedit
        libero explicabo porro tenetur.
      </p>
      <div className="w-full flex flex-row items-center justify-between">
        {" "}
        <p>beqa</p>
        <div className=" flex flex-row items-center justify-center gap-2">
          <p>faust</p> <p>lazare</p> <p>logo</p>
        </div>
      </div>
    </div>
  );
}
