import React from "react";
import { Button } from "flowbite-react";
import { useUserContext } from "../context";
export default function Tedo() {
  const context = useUserContext();
  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <img src="./assets/tedo.png" alt="" className=" w-full h-[900px] " />
      </div>

      <div className="  absolute  top-[530px] right-[900px] z-50">
        <div className="w-[300px] h-[200px] rounded-3xl gap-5 flex flex-col items-center justify-center ">
          <div className="  flex flex-row items-center">
            <Button
              onClick={() => context.setTedo(false)}
              outline
              gradientDuoTone="purpleToBlue"
            >
              დიახ
            </Button>
            <Button outline gradientDuoTone="pinkToOrange">
              კი
            </Button>
          </div>
        </div>
      </div>
      <div className=" w-full h-full opacity-[0.24] bg-black absolute top-0  right-0 z-20 ">
        {" "}
      </div>
    </div>
  );
}
