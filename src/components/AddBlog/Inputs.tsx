import { type FieldValues, useForm } from "react-hook-form";
import errorIcon from "../../assets/errorIcon.svg";
import InputMask from "react-input-mask";
import UploadIcon from "../../assets/UploadIcon.png";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Category from "./Category";
import { IoMdClose } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import complete from "../../assets/complete.svg";
import { useUserContext } from "../../context";

interface InputsForm {
  author: string;
  title: string;
  description: string;
  date: string;
  category: string;
  email: string;
  image: string;
}

interface Category {
  id: number;
  name: string;
  background_color: string;
  text_color: string;
}

const Inputs = () => {
  const [categoryMenu, setCategoryMenu] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(
    localStorage.getItem("image") || null
  );
  const [gift, setGift] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    JSON.parse(localStorage.getItem("selectedCategories") || "[]")
  );
  const [imageError, setImageError] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [categoryError, setCategoryError] = useState<boolean>(false);
  const [imageBorder, setImageBorder] = useState<string>("border-gray-400");
  const [imageNames, setImageNames] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const context = useUserContext();

  useEffect(() => {
    fetch("https://tsereteli.pythonanywhere.com/categories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCategories(data);
      });
  }, []);

  console.log(categories);

  // const context = useUserContext();

  const gifts = [
    {
      id: 1,
      title: "ლაზარესგან",
      link: "https://www.youtube.com/watch?v=h3LAmt_Yeq0",
    },
    {
      id: 2,
      title: "გიორგისგან",
      link: "https://www.youtube.com/watch?v=dBDkYofMUs4&list=RDGMEMCMFH2exzjBeE_zAHHJOdxg&index=3",
    },
  ];

  const handleCategorySelect = (category: string) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
      setCategoryError(false);
      setCategoryMenu(false);
    }
  };

  const handleRemoveCategory = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.filter((selectedCategory) => selectedCategory !== category)
    );
    setCategoryError(false);
  };

  const getCategoryBgColor = (categoryName: string): string | undefined => {
    const selectedCategory = categories.find(
      (category) => category.name === categoryName
    );
    return selectedCategory?.background_color;
  };

  const getCategoryColor = (categoryItem: string): string | undefined => {
    const selectedCategory = categories.find(
      (category) => category.name === categoryItem
    );
    return selectedCategory?.text_color;
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<InputsForm>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      // Increment the watch length
      setImageError(true);
      setValue("image", imageWatch + 1);

      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
      setValue("image", imageUrl);

      setImageBorder("border-green-500");

      setImageNames([selectedFile.name]);
    } else {
      setValue("image", "");
      setImage(null);
      setImageBorder("border-gray-400");
      setImageNames([]);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    if (data) {
      data.author === "";
      console.log("Form Data:", data);
    }

    const formData = {
      author: data.author || "",
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      email: data.email || "",
      image: data.image || "",
      categories: selectedCategories,
    };

    console.log("FormData:", formData);

    localStorage.setItem("author", data.author || "");
    localStorage.setItem("title", data.title || "");
    localStorage.setItem("description", data.description || "");
    localStorage.setItem("date", data.date || "");
    localStorage.setItem("email", data.email || "");

    // Handle empty category input
    if (selectedCategories.length === 0) {
      setCategoryError(true);
    } else {
      setCategoryError(false);
      localStorage.setItem("category", selectedCategories.join(",") || "");
    }

    // Check if form data and validation are true
    if (Object.keys(errors).length === 0 && selectedCategories.length > 0) {
      // Reset the form values
      setValue("author", "");
      setValue("title", "");
      setValue("description", "");
      setValue("date", "");
      setValue("email", "");
      setValue("image", "");
      setSelectedCategories([]);
      setCategoryMenu(false);
      setImage(null);
      setImageNames([]);
    }

    setModal(true);

    try {
      const response = await fetch(
        "https://tsereteli.pythonanywhere.com/blogs/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token 1551dba47b89d225d1859c0ad03b7076edd44a72",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setModal(true);
      } else {
        //
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const loadDataFromLocalStorage = () => {
    const storedAuthor = localStorage.getItem("author") || "";
    const storedTitle = localStorage.getItem("title") || "";
    const storedDescription = localStorage.getItem("description") || "";
    const storedDate = localStorage.getItem("date") || "";
    const storedEmail = localStorage.getItem("email") || "";
    const storedImage = localStorage.getItem("image") || "";
    const storedSelectedCategories = JSON.parse(
      localStorage.getItem("selectedCategories") || "[]"
    );

    // Set the form values from localStorage
    setValue("author", storedAuthor);
    setValue("title", storedTitle);
    setValue("description", storedDescription);
    setValue("date", storedDate);
    setValue("email", storedEmail);
    setValue("image", storedImage);
    setSelectedCategories(storedSelectedCategories);
  };

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  const titleWatch = watch("title", "");
  const descriptionWatch = watch("description", "");
  const dateWatch = watch("date", "");
  const emailWatch = watch("email", "");
  const authorWatch = watch("author", "");
  const imageWatch = watch("image", "");
  const categoriesWatch = watch("category", "");

  useEffect(() => {
    // Store form data in localStorage whenever it changes
    localStorage.setItem("author", authorWatch || "");
    localStorage.setItem("title", titleWatch || "");
    localStorage.setItem("description", descriptionWatch || "");
    localStorage.setItem("date", dateWatch || "");
    localStorage.setItem("email", emailWatch || "");
    localStorage.setItem("image", imageWatch || "");
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );
  }, [
    authorWatch,
    titleWatch,
    descriptionWatch,
    dateWatch,
    emailWatch,
    imageWatch,
    selectedCategories,
  ]);

  useEffect(() => {
    localStorage.setItem("image", image || "");
  }, [image]);

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

  useEffect(() => {
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );
  }, [selectedCategories]);

  useEffect(() => {
    setValue("category", selectedCategories.join(",") || "");
    setValue("image", image || "");
  }, [selectedCategories, image, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <motion.div
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-[#1A1A1F] text-sm font-medium leading-5 mb-2">
            ატვირთეთ ფოტო
          </h3>
          <div
            className={`${
              imageError ? "border-green-500" : imageBorder
            } w-[280px] md:w-[590px] border bg-[#F4F3FF] py-12 flex justify-center items-center flex-col space-y-6 border-dashed rounded-xl ${
              imageWatch.length > 0
                ? "border border-green-500"
                : "border-gray-600"
            }`}
          >
            {image ? (
              <>
                <h1 className="font-bold text-xl text-center">{imageNames}</h1>
                <img
                  src={image}
                  alt={`${image} Uploaded`}
                  className="max-h-40 md:max-h-60 p-4 rounded-[40px] animate-pulse cursor-pointer hover:scale-110 transform transition-all duration-700"
                />
                <div className="relative flex flex-row gap-2 px-4">
                  {!gift ? (
                    <button
                      className="bg-[#E4E3EB] p-3 rounded-xl border-[#E4E3EB] hover:scale-110 duration-300"
                      onClick={() => setImage(null)}
                    >
                      აირჩიეთ სხვა სურათი
                    </button>
                  ) : null}
                  {/* {gift ? (
                    <button
                      onClick={() => setGift(false)}
                      className="bg-red-400 text-white p-3 rounded-xl border-[#E4E3EB] hover:scale-110 duration-300"
                    >
                      აღარ მინდა საჩუქარი
                    </button>
                  ) : (
                    <button>a</button>
                  )} */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="flex justify-center items-center">
                      {gift && (
                        <div className="flex flex-row gap-10">
                          {gifts.map((item) => {
                            return (
                              <button
                                className="bg-green-500 text-white p-1 rounded-xl"
                                key={item.id}
                              >
                                <a
                                  href={item.link}
                                  key={item.id}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {item.title}
                                </a>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div
                className={` w-full items-center text-center justify-center mx-auto ${
                  !imageError ? "border-red-400" : "border-green-400"
                } flex flex-col gap-y-4 items-center`}
              >
                <img src={UploadIcon} alt="UploadIcon" />
                <div className="flex flex-row justify-center items-center w-full text-center mx-auto">
                  <p className="hidden md:block text-[#1A1A1F] text-sm leading-5">
                    ჩააგდეთ ფაილი აქ ან
                  </p>
                  <input
                    {...register("image", { required: true })}
                    onChange={(e) => handleImageChange(e)}
                    accept="image/*"
                    type="file"
                    className={`custom-file-input pl-1 font-medium w-[140px]`}
                    name="image"
                  />
                </div>
              </div>
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
                <label
                  className={` ${
                    context.darkLight ? "text-[#1A1A1F] " : "text-white"
                  } text-sm font-medium leading-5 mb-2`}
                >
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
                      : "border-[#14D81C] hover:border-[#14D81C]"
                  }  ${
                    (errors.author && authorWatch.length < 4) ||
                    errors.author ||
                    !validateGeorgianWords(authorWatch)
                      ? "border-[#14D81C] hover-border-[#14D81C]"
                      : ""
                  }${
                    !errors.author && "border-green-400 "
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

              {/*            ******************** სათაური **************             */}

              <div className="flex flex-col">
                <label
                  className={` ${
                    context.darkLight ? "text-[#1A1A1F] " : "text-white"
                  } text-sm font-medium leading-5 mb-2`}
                >
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
                    "border-green-400 hover:border-[#14D81C]"
                  } w-[288px] mb-2 py-3 pl-4 border border-[#E4E3EB] bg-[#FCFCFD] rounded-xl
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none`}
                  type="text"
                  placeholder="შეიყვანეთ სათაური"
                />
                <li
                  className={`${errors.title && "text-red-600"} ${
                    titleWatch.length >= 2 && "text-lime-500"
                  } text-[#85858D] text-xs leading-5 ml-4`}
                >
                  მინიმუმ 2 სიმბოლო
                </li>
              </div>
            </div>
          </motion.div>
          {/*   ****************** აღწერა ********************* */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 3, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col space-y-2 mt-6">
              <label
                className={` ${
                  context.darkLight ? "text-[#1A1A1F] " : "text-white"
                } text-sm font-medium leading-5 `}
              >
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
                className={`border-[#E4E3EB] ${
                  errors.description && "border-red-600 hover:border-red-600"
                } ${
                  descriptionWatch.length >= 2 &&
                  "border-green-500 hover:border-green-500 outline-none"
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
          {/*  ******************************** Date ************************* */}
          <div className="mt-6 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between space-x-0 md:space-x-2 ">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 3, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col space-y-2">
                <label
                  className={` ${
                    context.darkLight ? "text-[#1A1A1F] " : "text-white"
                  } text-sm font-medium leading-5`}
                >
                  გამოქვეყნების თარიღი *
                </label>
                <div className="relative w-[288px]">
                  <InputMask
                    {...register("date", {
                      required: true,
                    })}
                    mask="99.99.9999"
                    maskChar={null}
                    id="dateInput"
                    type="text"
                    placeholder="22/01/2024"
                    value={dateWatch}
                    className={`h-[80px] relative  cursor-pointer min-w-[288px] min-h-[55px] max-h-[90px] ${
                      errors.date && "border-[#EA1919] hover:border-[#EA1919]"
                    } ${
                      dateWatch.length >= 10 &&
                      "border-green-600 hover:border-green-600"
                    } ${
                      dateWatch.length < 10 &&
                      dateWatch.length > 0 &&
                      "border-[#EA1919] hover:border-[#EA1919]"
                    } w-[288px] py-3 px-4 rounded-xl border border-[#E4E3EB] bg-[#FCFCFD]
            hover:border-[#5D37F3] hover:border-[1.5px] outline-none h-[55px]`}
                  />
                  <span className="absolute right-5 translate-x-1/2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    <MdDateRange size={20} />
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 3, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative flex flex-col space-y-2 w-[288px]">
                <label
                  className={` ${
                    context.darkLight ? "text-[#1A1A1F] " : "text-white"
                  } text-sm font-medium leading-5`}
                >
                  კატეგორია *
                </label>
                <div
                  onClick={() => setCategoryMenu(!categoryMenu)}
                  className={`relative ${
                    errors.category && errors.category.type === "required"
                      ? "border-red-600"
                      : ""
                  }`}
                >
                  <input
                    {...register("category", {
                      required: "Category is required",
                    })}
                    type="text"
                    value={selectedCategories.length > 0 ? "." : ""}
                    readOnly
                    placeholder={
                      selectedCategories.length > 0 ? "" : "აირჩიეთ კატეგორია"
                    }
                    className={`${categoriesWatch} h-[80px]
                    ${errors.category ? "border-red-600" : ""}
                    ${
                      categoriesWatch.length > 1 && !errors.category
                        ? "border-green-600"
                        : ""
                    }
                    overflow-y-auto relative cursor-pointer min-w-[288px] min-h-[55px] max-h-[90px] py-3 px-4 rounded-xl border border-[#E4E3EB] bg-[#FCFCFD]
                    hover:border-[#5D37F3] hover:border-[1.5px] outline-none`}
                    onChange={(e) => {
                      e.preventDefault();
                    }}
                  />

                  <span className="absolute right-5 translate-x-1/2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {categoryMenu ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                  {selectedCategories.length > 0 && (
                    <div className="absolute top-1 left-0 flex flex-row flex-wrap">
                      {categoryError && (
                        <div className="text-red-600 text-xs leading-5 mt-1">
                          Please select at least one category.
                        </div>
                      )}

                      {selectedCategories.map((category) => (
                        <div
                          key={category}
                          className="flex flex-row items-center gap-1 ml-1 hover:scale-110 duration-300 py-1 text-white px-2 rounded-[30px] text-xs font-medium leading-4 cursor-pointer"
                          style={{
                            backgroundColor: getCategoryBgColor(category),
                            color: getCategoryColor(category)?.split(" ")[0],
                          }}
                        >
                          {category}{" "}
                          <span
                            onClick={() => handleRemoveCategory(category)}
                            className="cursor-pointer text-red-600"
                          >
                            <IoMdClose />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {categoryMenu && (
                  <Category
                    categories={categories}
                    onCategorySelect={handleCategorySelect}
                  />
                )}
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
              <label
                className={` ${
                  context.darkLight ? "text-[#1A1A1F] " : "text-white"
                } text-sm font-medium leading-5`}
              >
                ელ-ფოსტა
              </label>
              <input
                {...register("email", {
                  required: false,
                  validate: validateEmail,
                })}
                type="text"
                placeholder="Example@redberry.ge"
                className={` border-[#E4E3EB]
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
              <div className="absolute flex flex-row gap-x-2 mt-2">
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
                disabled={
                  Object.keys(errors).length > 0 ||
                  !watch("category") ||
                  !watch("image")
                }
                className={`${
                  Object.keys(errors).length > 0 ||
                  !watch("category") ||
                  !watch("image")
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
      {modal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="relative bg-white rounded-xl w-[480px] h-[260px] flex justify-center items-center flex-col">
            <IoMdClose
              size={25}
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => setModal(false)}
            />
            <img src={complete} alt="complete" />
            <div className="flex  flex-col items-center gap-y-10">
              <h1 className="text-[#1A1A1F] text-xl font-bold leading-4 mt-5">
                ჩანაწერი წარმატებით დაემატა
              </h1>
              <Link to={"/"}>
                <button
                  className={`bg-[#5D37F3] py-3 w-[432px] px-4 rounded-md text-white font-bold text-base`}
                >
                  მთავარ გვერდზე დაბრუნება
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Inputs;
