import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUserContext } from "../context";
import data from "../../data.json";
const HomePage = () => {
  const context = useUserContext();

  return (
    <div
      className={` ${
        context.darkLight
          ? " bg-[#F3F2FA] text-[#1A1A1F]"
          : "bg-[#0e101cf8] text-[#FFF]"
      }   flex flex-col items-center  justify-around gap-16 pt-[64px] w-full`}
    >
      <div className=" flex flex-col items-center justify-center  w-full md:flex-row md:justify-between md:pl-10 xl:pl-[76px] mt-[64px] ">
        <img
          className=" w-[424px] lg:w-full pl-5 md:pl-10 xl:pl-[76px] md:order-2"
          src="./assets/Blog-1024x355 1.png"
          alt=""
        />
        <h1 className=" text-[44px] font-bold leading-[52px] md:text-[64px] md:leading-[72px] md:order-1">
          ბლოგი
        </h1>
      </div>
      <div
        className="flex flex-wrap  items-center justify-center gap-2 md:gap-5 xl:gap-8 md:items-start 
      "
      >
        {data.map((item: any) => (
          <div key={item.id}>
            <section className=" w-[340px] flex flex-wrap  items-center justify-center    gap-14">
              <div className="flex flex-col gap-6">
                <img
                  className=" w-[340px]  rounded-xl bg-teal-500 xl:w-[408px]"
                  src={item.img}
                  alt=""
                />
                <div className="flex flex-col items-start justify-between gap-4 ">
                  <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-[14px] font-medium leading-5 xl:text-[16px]">
                      {item.name}
                    </p>
                    <p className="text-[12px]  font-normal leading-4 text-[#85858D]">
                      {item.day}
                    </p>
                  </div>
                  <h2 className=" font-medium leading-5 text-[16px] xl:text-[20px] h-[56px]">
                    {item.title}
                  </h2>

                  <div className="flex flex-wrap items-start justify-start h-[28px]">
                    {item.button.map((index: any) => (
                      <button
                        key={index}
                        className={`text-[12px] font-medium leading-4 px-2.5 py-1.5 rounded-[30px] `}
                        style={{ marginRight: "8px" }}
                      >
                        {index}
                      </button>
                    ))}
                  </div>
                  <p
                    className={` ${
                      context.darkLight ? "text-[#404049] " : "text-[#85858D]"
                    }  text-[12px] font-normal  xl:text-[16px] h-[56px]`}
                  >
                    {item.text}
                  </p>
                  <Link
                    to={"/:id"}
                    className="text-[#5D37F3] text-[14px]  font-medium leading-5 flex flex-row items-center justify-center  mt-4 "
                  >
                    სრულად ნახვა <MdOutlineArrowOutward size={18} />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
