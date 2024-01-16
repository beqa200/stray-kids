import { Link } from "react-router-dom";
import PreviousButtonImage from "../../assets/Arrow.svg";

const PreviousButton = () => {
  return (
    <Link to={"/"}>
      <img
        className="absolute left-20 top-24 cursor-pointer hover:drop-shadow-2xl"
        src={PreviousButtonImage}
        alt="PreviousButtonImage"
      />
    </Link>
  );
};

export default PreviousButton;
