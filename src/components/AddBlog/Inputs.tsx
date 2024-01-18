import { type FieldValues, useForm } from "react-hook-form";
import errorIcon from "../../assets/errorIcon.svg";
import UploadIcon from "../../assets/UploadIcon.png";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { useState } from "react";
import Category from "./Category";

interface InputsForm {
  author: string;
  title: string;
  description: string;
  date: string;
  category: string;
  email: string;
  image: string;
}

const categoryArray = [
  {
    id: 1,
    name: "მარკეტი",
    color: "#D6961C",
    bgColor: "rgba(255, 184, 47, 0.08)",
  },
  {
    id: 2,
    name: "აპლიკაცია",
    color: "#15C972",
    bgColor: "rgba(28, 214, 125, 0.08)",
  },
  {
    id: 3,
    name: "ხელოვნური ინტელექტი",
    color: "#B71FDD",
    bgColor: "#EEE1F7",
  },
  {
    id: 4,
    name: "UI/UX",
    color: "#DC2828",
    bgColor: "rgba(250, 87, 87, 0.08)",
  },
  {
    id: 5,
    name: "კვლევა",
    color: "#60BE16",
    bgColor: "#E9EFE9",
  },
  {
    id: 6,
    name: "Figma",
    color: "#1AC7A8",
    bgColor: "rgba(8, 210, 174, 0.08)",
  },
];

const Inputs = () => {
  const [categoryMenu, setCategoryMenu] = useState<boolean>(false);
  // const [image, setImage] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<InputsForm>();

  const onSubmit = async (data: FieldValues) => {
    const selectedFile = data.image?.[0];

    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      setImage(URL.createObjectURL(selectedFile));
    } else {
      console.error("No file selected");
    }
    console.log("Form Data:", data);
  };

  console.log(errors.image);

  const titleWatch = watch("title", "");
  const descriptionWatch = watch("description", "");
  const dateWatch = watch("date", "");
  const emailWatch = watch("email", "");
  const authorWatch = watch("author", "");
  const imageWatch = watch("image", "");

  console.log(imageWatch);

  const validateGeorgianWords = (value: string): boolean => {
    const georgianRegex = /^[\u10A0-\u10FF\s]+$/;
    return georgianRegex.test(value);
  };

  const validateAtLeastTwoWords = (value: string): boolean => {
    const words = value.split(/\s+/);
    return words.length >= 2;
  };

  const validateEmail = (value: string): boolean | string => {
    if (value.trim() === "") {
      return true;
    }

    const emailRegex = /^[^\s]+@redberry\.ge$/;
    return emailRegex.test(value) || "Email should end with redberry.ge";
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setImage(URL.createObjectURL(selectedFile));
    } else {
      setImage(null); // Reset image if no file is selected
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <motion.div
        initial={{ opacity: 0, x: 600 }}
        animate={{ opacity: 3, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        {image !== null && (
          <img
            src={image}
            alt="Selected Image"
            className="max-h-60 rounded-lg"
          />
        )}
        <h3 className="text-[#1A1A1F] text-sm font-medium leading-5 mb-2">
          ატვირთეთ ფოტო
        </h3>
        <div
          className={`${
            !image && errors.image ? "border-red-500" : "border-gray-600"
          }  w-full bg-[#F4F3FF] py-12 flex justify-center
    items-center flex-col space-y-6 border border-dashed rounded-xl`}
        >
          {image ? (
            <img
              src={image}
              alt="Selected Image"
              className="max-h-60 rounded-lg"
            />
          ) : (
            <>
              <img src={UploadIcon} alt="UploadIcon" />
              <p className="text-[#1A1A1F] text-sm leading-5">
                ჩააგდეთ ფაილი აქ ან
                <input
                  {...register("image", {
                    required: true,
                  })}
                  onChange={handleImageChange}
                  accept="image/*"
                  type="file"
                  className={`custom-file-input pl-1 font-medium`}
                  name="image"
                />
              </p>
            </>
          )}
        </div>
      </motion.div>
      <div className="mt-6 flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col space-y-10 md:space-y-0 md:space-x-2 md:flex-row w-full justify-between">
            {/* ავტორი */}
            <div className="flex flex-col">
              <label className="text-[#1A1A1F] text-sm font-medium leading-5 mb-2">
                ავტორი*
              </label>
              <input
                {...register("author", {
                  required: "Author is required",
                  minLength: {
                    value: 4,
                    message: "Author must be at least 4 characters",
                  },
                  validate: {
                    georgianWords: (value) =>
                      validateGeorgianWords(value) ||
                      "Author must contain only Georgian words",
                    atLeastTwoWords: (value) =>
                      validateAtLeastTwoWords(value) ||
                      "Author must have at least two words",
                  },
                })}
                type="text"
                className={` ${
                  errors.author
                    ? "border-[#EA1919] hover:border-[#EA1919]"
                    : "border border-[#14D81C]"
                }  ${
                  (errors.author && authorWatch.length < 4) ||
                  errors.author ||
                  !validateGeorgianWords(authorWatch)
                    ? "border-[#14D81C] hover-border-[#14D81C]"
                    : ""
                }${
                  !errors.author && "border-green-600 "
                }  w-[288px] mb-2 py-3 pl-4 border border-[#E4E3EB] bg-[#FCFCFD] rounded-xl
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none`}
                placeholder="შეიყვანეთ ავტორი"
              />
              <div className="text-xs leading-5 text-[#85858D] ml-4">
                <li
                  className={`${
                    errors.author && authorWatch.length < 4
                      ? "text-red-700"
                      : ""
                  } ${authorWatch.length >= 4 && "text-[#14D81C]"}`}
                >
                  მინიმუმ 4 სიმბოლო
                </li>
                <li
                  className={`${
                    errors.author && authorWatch.split(/\s+/).length <= 1
                      ? "text-red-700"
                      : ""
                  } ${
                    authorWatch.split(/\s+/).length >= 2 && "text-[#14D81C]"
                  }`}
                >
                  მინიმუმ ორი სიტყვა
                </li>
                <li
                  className={`${
                    validateGeorgianWords(authorWatch)
                      ? "text-[#14D81C]"
                      : errors.author
                      ? "text-[#EA1919]"
                      : "text-[#85858D]"
                  }`}
                >
                  მხოლოდ ქართული სიმბოლოები
                </li>
              </div>
            </div>
            {/* სათაური */}
            <div className="flex flex-col">
              <label className="text-[#1A1A1F] text-sm font-medium leading-5 mb-2">
                სათაური*
              </label>
              <input
                {...register("title", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "title required minimum 2 symbols",
                  },
                })}
                className={`${
                  errors.title && "border-[#EA1919] hover:border-[#EA1919]"
                } ${
                  titleWatch.length >= 2 &&
                  "border-[#14D81C] hover:border-[#14D81C]"
                } w-[288px] mb-2 py-3 pl-4 border  bg-[#FCFCFD] rounded-xl
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none`}
                type="text"
                placeholder="შეიყვანეთ სათაური"
              />
              <li
                className={`${errors.title && "text-red-600"} ${
                  titleWatch.length >= 2 && "text-green-600"
                } text-[#85858D] text-xs leading-5 ml-4`}
              >
                მინიმუმ 2 სიმბოლო
              </li>
            </div>
          </div>
        </motion.div>
        {/* აღწერა */}
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col space-y-2 mt-6">
            <label className="text-[#1A1A1F] text-sm font-medium leading-5">
              აღწერა *
            </label>
            <textarea
              {...register("description", {
                required: true,
                minLength: {
                  value: 2,
                  message: "Description must be at least 2 characters",
                },
              })}
              className={`${
                errors.description && "border-red-600 hover:border-red-600"
              } ${
                descriptionWatch.length >= 2 &&
                "border-[#14D81C] hover:border-[#14D81C]"
              } min-h-[124px]  bg-[#FCFCFD] border rounded-xl pt-3 pl-4
          hover:border-[#5D37F3] hover:border-[1.5px] outline-none w-[300px] md:w-full`}
              placeholder="შეიყვანეთ აღწერა"
            ></textarea>
            <li className={`text-xs leading-5 text-[#85858D]`}>
              <span
                className={`${errors.description && "text-red-600"} ${
                  descriptionWatch.length >= 2 ? "text-[#14D81C]" : ""
                }`}
              >
                მინიმუმ 2 სიმბოლო
              </span>
            </li>
          </div>
        </motion.div>
        {/*  */}
        <div className="mt-6 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between space-x-0 md:space-x-2 ">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 3, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col space-y-2">
              <label className="text-[#1A1A1F] text-sm font-medium leading-5">
                გამოქვეყნების თარიღი *
              </label>
              <input
                {...register("date", {
                  required: "date must be a valid date",
                })}
                type="date"
                className={`${
                  errors.date && "border-[#EA1919] hover:border-[#EA1919]"
                } ${
                  dateWatch && "border-green-600 hover:border-green-600"
                } w-[288px] py-3 px-4 rounded-xl border border-[#E4E3EB] bg-[#FCFCFD]
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none `}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 3, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col space-y-2">
              <label className="text-[#1A1A1F] text-sm font-medium leading-5">
                კატეგორია *
              </label>
              <div
                onClick={() => setCategoryMenu(!categoryMenu)}
                className="relative"
              >
                <input
                  {...register("category")}
                  type="text"
                  value={""}
                  placeholder="აირჩიეთ კატეგორია"
                  className="cursor-pointer w-[288px] py-3 px-4 rounded-xl border border-[#E4E3EB] bg-[#FCFCFD]
    hover:border-[#5D37F3] hover:border-[1.5px] outline-none"
                />
                <span className="absolute right-7 md:right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  {categoryMenu ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {categoryMenu && <Category categoryArray={categoryArray} />}
            </div>
          </motion.div>
        </div>
        {/*  */}
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mt-6 flex flex-col space-y-2">
            <label className="text-[#1A1A1F] text-sm font-medium leading-5">
              ელ-ფოსტა
            </label>
            <input
              {...register("email", {
                required: false,
                validate: validateEmail,
              })}
              type="text"
              placeholder="Example@redberry.ge"
              className={`
                emailWatch.length > 0 && !emailWatch.includes("redberry.ge")
                  ? "border-red-600 hover:border-red-600"
                  : ""
              } ${
                emailWatch.includes("@redberry.ge")
                  ? "border-green-700 hover:border-green-700"
                  : ""
              } w-[288px] py-3 px-4 rounded-xl border bg-[#FCFCFD]
  hover:border-[#5D37F3] hover:border-[1.5px] outline-none `}
            />
          </div>
          {emailWatch.length > 0 && !emailWatch.includes("redberry.ge") ? (
            <div className="flex flex-row gap-x-2 mt-2">
              <img src={errorIcon} alt="errorIcon" />
              <span className="text-[#EA1919] text-xs leading-5">
                მეილი უნდა მთავრდებოდეს @redberry.ge-ით
              </span>
            </div>
          ) : null}
        </motion.div>
        {/*  */}
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="my-10 flex justify-end">
            <button
              type="submit"
              disabled={Object.keys(errors).length > 0}
              className={`${
                Object.keys(errors).length > 0
                  ? "bg-[#E4E3EB] hover:shadow-none"
                  : "bg-[#5D37F3]"
              } text-white text-sm font-medium leading-5 py-[10px] w-[288px] rounded-lg hover:shadow-2xl transition-all duration-500`}
            >
              გამოქვეყნება
            </button>
          </div>
        </motion.div>
      </div>
    </form>
  );
};

export default Inputs;
