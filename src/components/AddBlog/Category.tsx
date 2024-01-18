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
      <div className="flex flex-col gap-2 border border-[#E4E3EB] rounded-xl max-w-[288px]">
        {categoryArray.map((category) => {
          return (
            <div className="p-1">
              <h1
                className="py-2 pl-4 rounded-3xl cursor-pointer"
                style={{
                  color: category.color,
                  backgroundColor: category.bgColor,
                }}
              >
                {category.name}
              </h1>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Category;
