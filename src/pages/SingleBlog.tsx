import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  return (
    <div>
      {id}
      <div></div>
    </div>
  );
};

export default SingleBlog;
