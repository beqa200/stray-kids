const Inputs = () => {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex flex-row w-full justify-between">
        {/* ავტორი */}
        <div className="flex flex-col">
          <label className="text-[#1A1A1F] text-sm font-medium leading-5 mb-2">
            ავტორი*
          </label>
          <input
            type="text"
            className="w-[288px] mb-2 py-3 pl-4 border border-[#E4E3EB] bg-[#FCFCFD] rounded-xl
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none"
            placeholder="შეიყვანეთ ავტორი"
          />
          <div className="text-[#85858D] text-xs leading-5">
            <li>
              <span>მინიმუმ 4 სიმბოლო</span>
            </li>
            <li>
              <span>მინიმუმ ორი სიტყვა</span>
            </li>
            <li>
              <span>მხოლოდ ქართული სიმბოლოები</span>
            </li>
          </div>
        </div>
        {/* სათაური */}
        <div className="flex flex-col">
          <label className="text-[#1A1A1F] text-sm font-medium leading-5 mb-2">
            სათაური*
          </label>
          <input
            className="w-[288px] mb-2 py-3 pl-4 border border-[#E4E3EB] bg-[#FCFCFD] rounded-xl
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none"
            type="text"
            placeholder="შეიყვანეთ სათაური"
          />
          <li className="text-[#85858D] text-xs leading-5">
            <span>მინიმუმ 2 სიმბოლო</span>
          </li>
        </div>
      </div>
      {/* აღწერა */}
      <div className="flex flex-col space-y-2 mt-6">
        <label className="text-[#1A1A1F]">აღწერა</label>
        <textarea
          className="min-h-[124px] bg-[#FCFCFD] border border-[#E4E3EB] rounded-xl pt-3 pl-4
          hover:border-[#5D37F3] hover:border-[1.5px] outline-none"
          placeholder="შეიყვანეთ აღწერა"
        ></textarea>
        <li className="text-[#85858D] text-xs leading-5">
          <span>მინიმუმ 2 სიმბოლო</span>
        </li>
      </div>
    </div>
  );
};

export default Inputs;
