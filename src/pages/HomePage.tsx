import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUserContext } from "../context";

import { useState } from "react";
import { motion } from "framer-motion";
const HomePage = () => {
  const context = useUserContext();

  const [findButton, setFindButton] = useState<string[]>([]);

  interface btnTypes {
    id: number;
    text: string;
    bg: string;
    color: string;
  }

  const btn = [
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
      id: 4,
      text: "UI/UX",
      bg: "rgba(250, 87, 87, 0.08)",
      color: "#DC2828",
    },
    {
      id: 5,
      text: "კვლევა",
      bg: "rgba(112, 207, 37, 0.08)",
      color: "#60BE16",
    },
    {
      id: 6,
      text: "Figma",
      bg: "rgba(8, 210, 174, 0.08)",
      color: "#1AC7A8",
    },
  ];
  const handleButtonClick = (category: string) => {
    if (findButton.includes(category)) {
      setFindButton((prevButtons) =>
        prevButtons.filter((btn) => btn !== category)
      );
    } else {
      setFindButton((prevButtons) => [...prevButtons, category]);
    }
  };

  const filterData = findButton.length
    ? context.info.filter((item) =>
        item.categories.some(
          (category: { name?: string }) =>
            category &&
            category.name &&
            findButton.includes(category.name.toLowerCase())
        )
      )
    : context.info;

  return (
    <div
      className={` ${
        context.darkLight ? "  text-[#1A1A1F]" : " text-[#FFF]"
      }   flex flex-col items-center  justify-around gap-16 pt-[64px] w-full xl:w-[1288px]`}
    >
      <div className=" flex flex-col items-center justify-center  w-full md:flex-row md:justify-between md:pl-10 xl:pl-[0] mt-[64px] ">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className=" text-[44px] font-bold leading-[52px] md:text-[64px] md:leading-[72px] md:order-1">
            ბლოგი
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className=" md:h-[200px] md:w-[500px]  pl-5 md:pl-10 xl:pl-[76px] md:order-2"
            src="./assets/Blog-1024x355 1.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="flex flex-row  flex-wrap px-5 md:px-10 items-center justify-between  gap-6">
        {btn.map((item: btnTypes) => (
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 3, x: 0 }}
            transition={{ duration: 2 }}
          >
            <button
              onClick={() => handleButtonClick(item.text)}
              key={item.id}
              style={{
                background: item.bg,
                color: item.color,
                outline: findButton.includes(item.text)
                  ? "1px solid #85858D"
                  : "none",
              }}
              className={`py-2  px-4  rounded-[30px] duration-300 hover:scale-[1.2]`}
            >
              {item.text}
            </button>
          </motion.div>
        ))}
      </div>
      <div
        className="flex flex-wrap  items-center justify-center gap-2 md:gap-5 xl:gap-8 md:items-start
      "
      >
        {filterData?.map((_item) => (
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 3, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div key={_item.id}>
              <section className=" w-[340px] flex flex-wrap  items-center justify-center xl:w-[408px]   gap-14">
                <div className="flex flex-col gap-6">
                  <img
                    className=" w-[340px]  rounded-xl bg-teal-500 xl:w-[408px]"
                    src={_item.image}
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-between gap-4 ">
                    <div className="flex flex-col items-start justify-start gap-1">
                      <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{ opacity: 3, x: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <p className="text-[14px] font-medium leading-5 xl:text-[16px]">
                          {_item.author}
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{ opacity: 3, x: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <p className="text-[12px]  font-normal leading-4 text-[#85858D]">
                          {_item.publish_date}
                        </p>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -300 }}
                      animate={{ opacity: 3, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <h2 className=" font-medium leading-5 text-[16px] xl:text-[20px] h-[56px]">
                        {_item.title}
                      </h2>
                    </motion.div>

                    <div className="flex flex-wrap items-start justify-start h-[50px]">
                      {_item.categories.map((item: any, index: number) => {
                        return (
                          <motion.div
                            initial={{ opacity: 0, x: -300 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            key={index}
                          >
                            <div>
                              <div
                                style={{
                                  color: item.background_color,
                                  background: item.text_color,
                                }}
                                className="mb-1 text-[12px] font-medium leading-4 px-2.5 py-1.5 mr-2 rounded-[30px]"
                              >
                                {item.name}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -300 }}
                      animate={{ opacity: 3, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <p
                        className={` ${
                          context.darkLight
                            ? "text-[#404049] "
                            : "text-[#85858D]"
                        }  text-[12px] font-normal  xl:text-[16px] h-[54px] overflow-hidden `}
                      >
                        {_item.description}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -300 }}
                      animate={{ opacity: 3, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <Link
                        to={`/${_item.id}`}
                        className="text-[#5D37F3] text-[14px]  font-medium leading-5 flex flex-row items-center justify-center  mt-4 mb-[56px]"
                      >
                        სრულად ნახვა <MdOutlineArrowOutward size={18} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
