import { useUserContext } from "../context";
import { useEffect, useState } from "react";
("use client");
import { Button } from "flowbite-react";
import { GiEvilMoon } from "react-icons/gi";
import { Dropdown } from "flowbite-react";
export default function Header() {
  const context = useUserContext();
  const handleScrollToTop = () => {
    const scrollStep = -window.scrollY; // Adjust the number to control the speed

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Adjust the interval for smoother animation
  };
  const [scroll, setScroll] = useState<any>(0.0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 300;
    const opacity = Math.min(scrollPosition / maxScroll, 0.5);
    setScroll(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headerStyle = {
    backgroundColor: context.darkLight
      ? `rgba(255, 255, 255, ${1 - scroll})`
      : `rgba(14, 16, 28, ${1 - scroll})`,
  };

  return (
    <header
      style={headerStyle}
      className={` ${
        context.darkLight
          ? "  bg-white text-[#1A1A1F] border-[#E4E3EB]"
          : "bg-[#0e101c] text-[#FFF]  border-[#404049]"
      } flex flex-col items-center justify-between w-full md:h-20 px-5 py-5 md:px-10 xl:px-[76px] border-b border-solid  fixed top-0 z-10 `}
    >
      <div className=" flex flex-row items-center justify-between w-full xl:w-[1288px]">
        <img
          className="w-[100px] md:w-[170px]"
          src={` ${
            context.darkLight
              ? " ./assets/LOGO-02 3.png "
              : "./assets/newLogo.svg"
          }`}
          alt=""
        />

        <div className="flex flex-row items-center justify-between w-[180px] md:w-[380px]">
          <div className=" hidden md:flex flex-row items-center justify-between  relative">
            <Dropdown
              outline
              gradientDuoTone={`${
                context.darkLight ? "purpleToBlue" : "pinkToOrange"
              }`}
              label={context.findFont}
              dismissOnClick={false}
            >
              <Dropdown.Item
                onClick={() => {
                  context.setFindFont(" გრიგოლია"), context.setFontMenu(false);
                }}
              >
                გრიგოლია
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  context.setFindFont("შეგიძლია"), context.setFontMenu(false);
                }}
              >
                შეგიძლია{" "}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  context.setFindFont(" დასქრინო"), context.setFontMenu(false);
                }}
              >
                დასქრინო
              </Dropdown.Item>
            </Dropdown>
          </div>
          <GiEvilMoon
            onClick={() => {
              context.setDarkLight(!context.darkLight);
            }}
            style={{ color: context.darkLight ? "#0e101c" : "white" }}
            size={40}
            className=" cursor-pointer"
          />

          <Button
            onClick={() => {
              context.setLogin(!context.login);
              handleScrollToTop();
            }}
            outline
            gradientDuoTone={`${
              context.darkLight ? "purpleToBlue" : "pinkToOrange"
            }`}
            className={`   
            text-[12px] font-medium    md:text-[14px]`}
          >
            შესვლა
          </Button>
        </div>
      </div>
    </header>
  );
}
