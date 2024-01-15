import { useUserContext } from "../context";

export default function Header() {
  const context = useUserContext();
  return (
    <div className="flex flex-row items-center justify-between w-full px-[76] py-5">
      <img src="./assets/LOGO-02 3.png" alt="" />

      <div className="bg-[#757575] w-10 h-5 rounded-xl relative ">
        <button className="w-3.5 h-3.5  absolute rounded-full bg-white left-1 top-[3px]"></button>
      </div>

      <button className="px-10 py-5 bg-[#5D37f3] rounded-lg">შესვლა</button>
    </div>
  );
}
