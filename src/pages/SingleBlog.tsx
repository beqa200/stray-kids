import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  return <div>SingleBlog {id}</div>;
};

export default SingleBlog;
