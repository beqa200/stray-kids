import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUserContext } from "../context";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "../index.css";
export default function Carusel() {
  const context = useUserContext();
  const [findCategory, setFindCategory] = useState<string[]>([]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    style: { outline: "none" },
    horizontal: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const filterData = context.info.filter((item) =>
    findCategory.length > 0
      ? item.categories.some((category: { title: string }) =>
          findCategory.includes(category.title)
        )
      : true
  );

  return (
    <div
      className={` ${
        context.darkLight ? "  text-[#1A1A1F]" : " text-[#FFF]"
      } md:ml-0  flex flex-row items-center justify-center overflow-auto `}
    >
      <div className=" w-[350px] md:w-[740px]  xl:w-[1288px] ">
        <Slider {...settings}>
          {filterData?.map((_item) => (
            <div key={_item.id}>
              <section className="  max-w-[408px]  ">
                <div className="flex flex-col gap-6">
                  <img
                    className=" w-[340px]  rounded-xl bg-teal-500 "
                    src={_item.image}
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-between gap-4 ">
                    <div className="flex flex-col items-start justify-start gap-1">
                      <p className="text-[14px] font-medium leading-5 xl:text-[16px]">
                        {_item.author}
                      </p>
                      <p className="text-[12px]  font-normal leading-4 text-[#85858D]">
                        {_item.publish_date}
                      </p>
                    </div>
                    <h2 className=" font-medium leading-5 text-[16px] xl:text-[20px] h-[56px]">
                      {_item.title} ase tu ise rogorc iuyo da aris da iqneba
                      rogorc vpiqrobt
                    </h2>

                    <div className="flex flex-wrap items-start justify-start h-[50px]">
                      {_item.categories.map((item: any) => (
                        <div key={item}>
                          <div
                            style={{
                              background: item.background_color,
                              color: item.text_color,
                            }}
                            className=" mb-1 text-[12px] font-medium leading-4 px-2.5 py-1.5 mr-2 rounded-[30px]"
                          >
                            {item.title}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p
                      className={` ${
                        context.darkLight ? "text-[#404049] " : "text-[#85858D]"
                      }  text-[12px] font-normal  xl:text-[16px] h-[54px] overflow-hidden`}
                    >
                      {_item.description} Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Est, qui sapiente?
                      Perferendis necessitatibus libero distinctio, similique
                      cumque atque optio aperiam hic consectetur deserunt
                      consequuntur sapiente nihil cupiditate, rem tenetur
                      laudantium?
                    </p>
                    <Link
                      to={`/${_item.id}`}
                      className="text-[#5D37F3] text-[14px]  font-medium leading-5 flex flex-row items-center justify-center  mt-4 mb-[56px]"
                    >
                      სრულად ნახვა <MdOutlineArrowOutward size={18} />
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          ))}
          {context.info?.map((_item) => (
            <div key={_item.id}>
              <section className="  max-w-[408px]  ">
                <div className="flex flex-col gap-6">
                  <img
                    className=" w-[340px]  rounded-xl bg-teal-500 "
                    src={_item.image}
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-between gap-4 ">
                    <div className="flex flex-col items-start justify-start gap-1">
                      <p className="text-[14px] font-medium leading-5 xl:text-[16px]">
                        {_item.author}
                      </p>
                      <p className="text-[12px]  font-normal leading-4 text-[#85858D]">
                        {_item.publish_date}
                      </p>
                    </div>
                    <h2 className=" font-medium leading-5 text-[16px] xl:text-[20px] h-[56px]">
                      {_item.title} ase tu ise rogorc iuyo da aris da iqneba
                      rogorc vpiqrobt
                    </h2>

                    <div className="flex flex-wrap items-start justify-start h-[50px]">
                      {_item.categories.map((item: any) => (
                        <div key={item}>
                          <div
                            style={{
                              background: item.background_color,
                              color: item.text_color,
                            }}
                            className=" mb-1 text-[12px] font-medium leading-4 px-2.5 py-1.5 mr-2 rounded-[30px]"
                          >
                            {item.title}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p
                      className={` ${
                        context.darkLight ? "text-[#404049] " : "text-[#85858D]"
                      }  text-[12px] font-normal  xl:text-[16px] h-[54px] overflow-hidden`}
                    >
                      {_item.description} Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Est, qui sapiente?
                      Perferendis necessitatibus libero distinctio, similique
                      cumque atque optio aperiam hic consectetur deserunt
                      consequuntur sapiente nihil cupiditate, rem tenetur
                      laudantium?
                    </p>
                    <Link
                      to={`/${_item.id}`}
                      className="text-[#5D37F3] text-[14px]  font-medium leading-5 flex flex-row items-center justify-center  mt-4 mb-[56px]"
                    >
                      სრულად ნახვა <MdOutlineArrowOutward size={18} />
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
