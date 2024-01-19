import { motion } from "framer-motion";

interface CategoryProps {
  categoryArray: {
    id: number;
    name: string;
    color: string;
    bgColor: string;
  }[];
}

const Category = ({ categoryArray }: CategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 3, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute p-2 flex flex-wrap gap-2 border bg-white shadow-2xl border-[#E4E3EB] rounded-xl max-w-[288px]">
        {categoryArray.map((category) => {
          return (
            <div className="">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 3, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h1
                  className="py-2 px-4 rounded-[30px] text-xs font-medium leading-4 cursor-pointer hover:scale-[1.2] duration-300"
                  style={{
                    color: category.color,
                    backgroundColor: category.bgColor,
                  }}
                >
                  {category.name}
                </h1>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Category;
