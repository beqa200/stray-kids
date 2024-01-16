import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUserContext } from "../context";
const HomePage = () => {
  const context = useUserContext();
  return (
    <div
      className={` ${
        context.darkLight
          ? " bg-[#fff] text-[#1A1A1F]"
          : "bg-[#0e101c] text-[#FFF]"
      }   flex flex-col items-center  justify-around  w-full`}
    >
      <div className=" flex flex-col items-center justify-center gap-16 w-full md:flex-row md:justify-between md:pl-10 xl:pl-[76px] mt-[64px]">
        <img
          className=" w-[424px] lg:w-full pl-5 md:pl-10 xl:pl-[76px] md:order-2"
          src="./assets/Blog-1024x355 1.png"
          alt=""
        />
        <h1 className=" text-[44px] font-bold leading-[52px] md:text-[64px] md:leading-[72px] md:order-1">
          ბლოგი
        </h1>
      </div>
      <section className=" w-[350px] flex flex-col items-center justify-center gap-6 mt-[64px] mb-[56px]">
        <img
          className=" w-[350px] h-[328px] rounded-xl bg-teal-500"
          src="./assets/smallicon.svg"
          alt=""
        />
        <div className="flex flex-col items-start justify-between gap-4">
          <div className="flex flex-col items-start justify-start gap-1">
            <p className="text-[16px] font-medium leading-5">ნია გოგსაძე</p>
            <p className="text-[12px]  font-normal leading-4 text-[#85858D]">
              02.11.2023
            </p>
          </div>
          <h2 className=" font-medium leading-5 text-[20px]">
            EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა
          </h2>
          <div className="flex flex-wrap items-start justify-start">
            <button className="text-[12px] font-medium leading-4 px-2.5 py-1.5 bg-yellow-300 rounded-[30px]">
              ხელოვნური ინტელექტი
            </button>
          </div>
          <p
            className={` ${
              context.darkLight ? "text-[#404049] " : "text-[#85858D]"
            }  text-[16px] font-normal leading-7 `}
          >
            6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
            სიზუსტისთვის, ეს პროცესი...
          </p>
          <Link
            to={"/:id"}
            className="text-[#5D37F3] text-[14px]  font-medium leading-5 flex flex-row items-center justify-center gap-1"
          >
            სრულად ნახვა <MdOutlineArrowOutward size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
