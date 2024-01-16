import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 3, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-[#1A1A1F] text-2xl md:text-[32px] font-bold leading-10 mb-10">
        ბლოგის დამატება
      </div>
    </motion.div>
  );
};

export default Title;
