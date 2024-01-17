import UploadIcon from "../../assets/UploadIcon.png";
import { motion } from "framer-motion";

const UploadFile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 600 }}
      animate={{ opacity: 3, x: 0 }}
      transition={{ duration: 1.5 }}
    >
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
            className="custom-file-input w-[120px] pl-1 font-medium"
            name="picture"
          />
        </p>
      </div>
    </motion.div>
  );
};

export default UploadFile;
