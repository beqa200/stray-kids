import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../context";
import Carusel from "../components/Carusel";

const SingleBlog = () => {
  const context = useUserContext();
  const { id } = useParams();
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
    // Loading state or handle if the blog is not found
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={` ${
          context.darkLight ? "  text-[#1A1A1F]" : " text-[#FFF]"
        }  mt-[64px] p-10 flex flex-col items-start justify-between gap-10`}
      >
        <img src={blog.image} alt="" />
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
          <h2 className=" font-medium leading-5 text-[16px] xl:text-[20px] h-[56px]">
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
        <div>მსგავსი სტატიები</div>
      </div>
      <Carusel />
    </div>
  );
};

export default SingleBlog;
