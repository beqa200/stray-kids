import { useUserContext } from "../context";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  const context = useUserContext();
  return (
    <div
      className={`   ${
        context.darkLight
          ? " bg-[#fff] text-[#1A1A1F] border-[#E4E3EB]"
          : "bg-[rgb(14,16,28)] text-[#85858D] border-[#404049]"
      } flex flex-col items-center justify-between  w-full  gap-7  border-t border-solid  py-5 px-5 md:px-10 xl:px-[76px] `}
    >
      <div className=" flex flex-col items-start justify-between  w-full  gap-7 xl:w-[1288px]">
        <img
          className="w-[80px] md:w-[150px]"
          src={` ${
            context.darkLight
              ? " ./assets/LOGO-02 3.png "
              : "./assets/newLogo.svg"
          }`}
          alt=""
        />
        <p className="w-full md:pr-[200px]">
          Redberry-იში თანამშრომლებს ძალიან უყვართ ერთმანეთისთვის ინფორმაციის,
          ინტერესების, ცოდნის გაზიარება. ამიტომ, მნიშვნელოვანი გახდა ამ
          ინფორმაციის მიწოდების პროცესის გამარტივება, რასაც გარკვეულწილად
          უზრუნველყოფს აღნიშნული აპლიკაცია, რომლის შექმნაშიც თქვენ დაეხმარებით
          რედბერის
        </p>
        <div className="w-full flex flex-row items-center justify-between">
          {" "}
          <p className=" text-[14px] leading-6 font-bold ">
            Copyright 2024. All Rights Reserved
          </p>
          <div
            className={`flex flex-row items-center justify-center gap-2 md:gap-8`}
          >
            <FaFacebook /> <FaSquareInstagram /> <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
