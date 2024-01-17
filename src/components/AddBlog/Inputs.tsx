import { type FieldValues, useForm } from "react-hook-form";
import errorIcon from "../../assets/errorIcon.svg";
import { motion } from "framer-motion";

interface InputsForm {
  author: string;
  title: string;
  description: string;
  date: string;
  category: string;
  email: string;
}

const Inputs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsForm>();

  const onSubmit = (data: FieldValues) => {
    console.log("Data:", data);
  };

  console.log("Errors:", errors.author);
  // console.log(watch("author"));

  const titleWatch = watch("title", "");
  const descriptionWatch = watch("description", "");
  const dateWatch = watch("date", "");
  const emailWatch = watch("email", "");
  const authorWatch = watch("author", "");

  console.log(authorWatch);

  const validateGeorgianWords = (value: string): boolean => {
    const georgianRegex = /^[\u10A0-\u10FF\s]+$/;
    return georgianRegex.test(value);
  };

  const validateAtLeastTwoWords = (value: string): boolean => {
    const words = value.trim().split(/\s+/);
    return words.length >= 2;
  };

  const validateEmail = (value: string): boolean | string => {
    if (value.trim() === "") {
      return true;
    }

    const emailRegex = /^[^\s]+@redberry\.ge$/;
    return emailRegex.test(value) || "Email should end with redberry.ge";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6 flex flex-col p-4">
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
                  errors.author && "border-[#EA1919] hover:border-[#EA1919]"
                } ${
                  (errors.author && authorWatch.length < 4) ||
                  (errors.author && authorWatch.split(/\s+/).length <= 2) ||
                  !validateGeorgianWords(authorWatch)
                    ? "border-[#E4E3EB] hover-border-[#E4E3EB]"
                    : ""
                }${
                  !errors.author && "border-[#14D81C] "
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
                    errors.author && authorWatch.split(/\s+/).length <= 2
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
                  titleWatch.length >= 2 && "text-[#14D81C]"
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
        <div className="mt-6 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between space-x-2">
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
                  dateWatch && "border-[#14D81C] hover:border-[#14D81C]"
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
              <input
                {...register("category")}
                type="text"
                placeholder="აირჩიეთ კატეგორია"
                className="w-[288px] py-3 px-4 rounded-xl border border-[#E4E3EB] bg-[#FCFCFD]
              hover:border-[#5D37F3] hover:border-[1.5px] outline-none"
              />
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
              className={`${
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
