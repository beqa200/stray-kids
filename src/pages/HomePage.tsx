import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUserContext } from "../context";
import data from "../../data.json";
import { useState } from "react";
const HomePage = () => {
  const context = useUserContext();

  const [findButton, setFindButton] = useState<any>(null);

  const [btn] = useState<any>([
    {
      id: 1,
      text: "მარკეტი",
      bg: "rgba(255, 184, 47, 0.08)",
      color: "#D6961C",
    },
    {
      id: 2,
      text: "აპლიკაცია",
      bg: "rgba(28, 214, 125, 0.08)",
      color: "#15C972",
    },
    {
      id: 3,
      text: "ხელოვნური ინტელექტი",
      bg: "rgba(177, 28, 214, 0.08)",
      color: "#B71FDD",
    },
    {
      id: 1,
      text: "UI/UX",
      bg: "rgba(250, 87, 87, 0.08)",
      color: "#DC2828",
    },
    {
      id: 1,
      text: "კვლევა",
      bg: "rgba(112, 207, 37, 0.08)",
      color: "#60BE16",
    },
    {
      id: 1,
      text: "Figma",
      bg: "rgba(8, 210, 174, 0.08)",
      color: "#1AC7A8",
    },
  ]);
  const filterData = findButton
    ? data.filter((item) =>
        item.button.some((button) => button.text === findButton)
      )
    : data;
  // unda davumatot all buttoni unda vikitxo
  return (
    <div
      className={` ${
        context.darkLight ? "  text-[#1A1A1F]" : " text-[#FFF]"
      }   flex flex-col items-center  justify-around gap-16 pt-[64px] w-full xl:w-[1288px]`}
    >
      <div className=" flex flex-col items-center justify-center  w-full md:flex-row md:justify-between md:pl-10 xl:pl-[0] mt-[64px] ">
        <img
          className=" w-[424px] lg:w-full pl-5 md:pl-10 xl:pl-[76px] md:order-2"
          src="./assets/Blog-1024x355 1.png"
          alt=""
        />
        <h1 className=" text-[44px] font-bold leading-[52px] md:text-[64px] md:leading-[72px] md:order-1">
          ბლოგი
        </h1>
      </div>
      <div className="flex flex-row  flex-wrap px-5 md:px-10 items-center justify-between  gap-6">
        {btn.map((item: any) => (
          <button
            onClick={() => setFindButton(item.text)}
            key={item.id}
            style={{ background: item.bg, color: item.color }}
            className={`  py-2  px-4  rounded-[30px]`}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div
        className="flex flex-wrap  items-center justify-center gap-2 md:gap-5 xl:gap-8 md:items-start 
      "
      >
        {filterData.map((item: any) => (
          <div key={item.id}>
            <section className=" w-[340px] flex flex-wrap  items-center justify-center xl:w-[408px]   gap-14">
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
                    {item.button.map((button: any) => (
                      <button
                        key={button.id}
                        className={` text-[12px] font-medium leading-4 px-2.5 py-1.5 mr-2 rounded-[30px]`}
                        style={{ background: button.bg, color: button.color }}
                      >
                        {button.text}
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
                    to={"/:id" + item.name}
                    className="text-[#5D37F3] text-[14px]  font-medium leading-5 flex flex-row items-center justify-center  mt-4 mb-[56px]"
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
