import { motion } from "framer-motion";

interface CategoryProps {
  categories: {
    id: number;
    name: string;
    text_color: string;
    background_color: string;
  }[];
  onCategorySelect: (category: string) => void;
}

const Category = ({ categories, onCategorySelect }: CategoryProps) => {
  const handleCategoryClick = (categoryName: string) => {
    onCategorySelect(categoryName);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 3, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute p-2 flex flex-wrap gap-3 border bg-white shadow-2xl border-[#E4E3EB] rounded-xl max-w-[288px]">
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <motion.div
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 3, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h1
                  onClick={() => handleCategoryClick(category.name)}
                  className="py-2 px-4 rounded-[30px] text-xs font-medium leading-4 cursor-pointer hover:scale-[1.2] duration-300"
                  style={{
                    color: category.text_color.split(" ")[0],
                    backgroundColor: category.background_color,
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
