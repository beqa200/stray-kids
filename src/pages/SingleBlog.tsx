import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../context";
import Carusel from "../components/Carusel";
import { FaArrowCircleLeft } from "react-icons/fa";
import PreviousButtonImage from "../assets/Arrow.svg";

const SingleBlog = () => {
  const context = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  type BlogCategory = {
    [x: string]: any;
    id: number;
    title: string;
    text_color: string;
    background_color: string;
  };
  type Blog = {
    email: ReactNode;
    description: ReactNode;
    id: number;
    title: string;
    image: string;
    author: string;
    categories: BlogCategory;
    publish_date: number;
  };

  const getBlog = async () => {
    const response = await fetch(
      `https://api.blog.redberryinternship.ge/api/blogs/${id}`,
      {
        headers: {
          Authorization: `Bearer 55c33fd3f2a7d8debd873352bb2ff1470b56cc0ce898d878243645c8d8e6e0ac`,
        },
      }
    );
    const data = await response.json();

    try {
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col items-center justify-center  mt-[184px] relative ">
      <div className="">
        {" "}
        <button
          onClick={() => {
            goBack();
          }}
          className="flex flex-row items-center justify-between z-10 w-[44px] left-0  top-0 absolute "
        >
          {/* <FaArrowCircleLeft
            style={{ color: context.darkLight ? "#0e101c" : "white" }}
            size={18}
          /> */}
          <img src={PreviousButtonImage} alt="" />
        </button>
      </div>
      <div
        className={` ${
          context.darkLight ? "  text-[#1A1A1F]" : " text-[#FFF]"
        }  flex flex-col items-start justify-between gap-10 w-[350px] xl:w-[720px]`}
      >
        <img src={blog.image} className=" md:w-[720px]" alt="" />
        <div className="flex flex-col items-start justify-between gap-2">
          <p className="text-[14px] font-medium leading-5 xl:text-[16px]">
            {" "}
            {blog.author}
          </p>
          <div className="flex flex-row items-center justify-center gap-1 text-[12px]  font-normal leading-4 text-[#85858D]">
            <p>{blog.publish_date}</p>
            <strong>.</strong>
            <p>{blog.email}</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-6">
          <h2 className=" font-medium leading-5 text-[22px] xl:text-[32px] h-[56px]">
            {blog.title}
          </h2>
          <div className="flex  flex-wrap items-center">
            {blog.categories.map(
              (_item: {
                background_color: any;
                text_color: any;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
              }) => (
                <div
                  style={{
                    background: _item.background_color,
                    color: _item.text_color,
                  }}
                  className=" mb-1 text-[12px] font-medium leading-4 px-2.5 py-1.5 mr-2 rounded-[30px]"
                >
                  {_item.title}
                </div>
              )
            )}
          </div>
          <p
            className={` ${
              context.darkLight ? "text-[#404049] " : "text-[#85858D]"
            }  text-[12px] font-normal  xl:text-[16px] h-[54px] overflow-hidden`}
          >
            {blog.description}
          </p>
        </div>
      </div>

      <Carusel />
    </div>
  );
};

export default SingleBlog;
