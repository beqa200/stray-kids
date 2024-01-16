import UploadIcon from "../../assets/UploadIcon.png";

const UploadFile = () => {
  return (
    <div>
      <h3 className="text-[#1A1A1F] text-sm font-medium leading-5 mb-2">
        ატვირთეთ ფოტო
      </h3>
      <div
        className="w-full bg-[#F4F3FF] py-12 flex justify-center
      items-center flex-col space-y-6 border border-#85858D border-dashed rounded-xl"
      >
        <img src={UploadIcon} alt="UploadIcon" />
        <p className="text-[#1A1A1F] text-sm leading-5">
          ჩააგდეთ ფაილი აქ ან
          <input
            type="file"
            id="fileInput"
            className="custom-file-input w-[120px] pl-1 font-medium"
            name="picture"
            value=""
          />
        </p>
      </div>
    </div>
  );
};

export default UploadFile;
