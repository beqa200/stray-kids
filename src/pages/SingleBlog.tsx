import { useParams } from "react-router-dom";
import data from "../../data.json";
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
