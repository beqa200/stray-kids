import { type FieldValues, useForm } from "react-hook-form";
import errorIcon from "../../assets/errorIcon.svg";

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
    formState: { errors, isValidating },
    watch,
  } = useForm<InputsForm>();

  const onSubmit = (data: FieldValues) => {
    console.log("Errors:", errors);
    console.log("Data:", data);
  };

  const validateGeorgianWords = (value: string): boolean => {
    const georgianRegex = /^[\u10A0-\u10FF\s]+$/;
    return georgianRegex.test(value);
  };

  const validateAtLeastTwoWords = (value: string): boolean => {
    const words = value.split(/\s+/);
    return words.length >= 2;
  };

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s]+@redberry\.ge$/;
    return emailRegex.test(value);
  };

  const titleValue = watch("title");
  const descriptionValue = watch("description");
  const dateValue = watch("date");
  const emailValue = watch("email");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6 flex flex-col p-4">
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
              className={`${
                errors.author ? "border-[#EA1919]" : "border-[#E4E3EB]"
              } w-[288px] mb-2 py-3 pl-4 border border-[#E4E3EB] bg-[#FCFCFD] rounded-xl
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none`}
              placeholder="შეიყვანეთ ავტორი"
            />
            <div className="text-xs leading-5 text-[#85858D] ml-4">
              <li>minimum 4 symbols</li>
              <li>minimum 2 words</li>
              <li>only Georgian words</li>
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
                errors.title ? "border-[#EA1919]" : "border-[#E4E3EB]"
              } ${
                titleValue && !isValidating
                  ? "border-green-600"
                  : "border-[#E4E3EB]"
              } w-[288px] mb-2 py-3 pl-4 border  bg-[#FCFCFD] rounded-xl
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none`}
              type="text"
              placeholder="შეიყვანეთ სათაური"
            />
            <li
              className={`${
                errors.title
                  ? "text-red-600"
                  : titleValue && !isValidating
                  ? "text-green-600"
                  : "text-gray-600"
              } text-xs leading-5 ml-4`}
            >
              მინიმუმ 2 სიმბოლო
            </li>
          </div>
        </div>
        {/* აღწერა */}
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
              errors.description ? "border-[#EA1919]" : "border-[#14D81C]"
            } ${
              descriptionValue && !isValidating
                ? "border-[#14D81C]"
                : "border-[#E4E3EB]"
            } min-h-[124px]  bg-[#FCFCFD] border rounded-xl pt-3 pl-4
          hover:border-[#5D37F3] hover:border-[1.5px] outline-none w-[300px] md:w-full`}
            placeholder="შეიყვანეთ აღწერა"
          ></textarea>
          <li
            className={`${
              errors.description
                ? "text-red-600"
                : descriptionValue && !isValidating
                ? "text-green-600"
                : "text-gray-600"
            } text-xs leading-5`}
          >
            <span>მინიმუმ 2 სიმბოლო</span>
          </li>
        </div>
        {/*  */}
        <div className="mt-6 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between space-x-2">
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
                errors.date ? "border-[#EA1919]" : "border-[#14D81C]"
              } w-[288px] py-3 px-4 rounded-xl border border-[#E4E3EB] bg-[#FCFCFD]
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none ${
              dateValue && !isValidating
                ? "border-green-600"
                : "border-[#E4E3EB]"
            }`}
            />
          </div>
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
        </div>
        {/*  */}
        <div className="mt-6 flex flex-col space-y-2">
          <label className="text-[#1A1A1F] text-sm font-medium leading-5">
            ელ-ფოსტა
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                validateEmail(value) || "Email should end with redberry.ge",
            })}
            type="text"
            placeholder="Example@redberry.ge"
            className={`${
              errors.email ? "border-[#EA1919]" : "border-[#14D81C]"
            } ${
              emailValue && !isValidating
                ? "border-[#14D81C]"
                : "border-[#E4E3EB]"
            } w-[288px] py-3 px-4 rounded-xl border bg-[#FCFCFD]
  hover:border-[#5D37F3] hover:border-[1.5px] outline-none `}
          />
        </div>
        {errors.email ? (
          <div className="flex flex-row gap-x-2 mt-2">
            <img src={errorIcon} alt="errorIcon" />
            <span className="text-[#EA1919] text-xs leading-5">
              მეილი უნდა მთავრდებოდეს @redberry.ge-ით
            </span>
          </div>
        ) : null}
        {/*  */}
        <div className="my-10 flex justify-end">
          <button
            type="submit"
            className=" text-white text-sm font-medium leading-5 py-[10px] w-[288px] bg-[#5D37F3] rounded-lg"
          >
            გამოქვეყნება
          </button>
        </div>
      </div>
    </form>
  );
};

export default Inputs;
