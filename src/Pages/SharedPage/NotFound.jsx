import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center font-bold text-[#1D2833] flex flex-col justify-center items-center h-screen space-y-5">
      <h2 className="text-[200px]">4<span className="text-[#7EBC12]">0</span>4</h2>
      <p className="text-5xl">Page <span className="text-[#7EBC12]">Not</span> Found</p>
      <p className="text-base font-normal text-[#737373]">
      Sorry, the page you're looking for is not found yet.
      </p>
      <Link to="/">
        <button className="btn hover:bg-transparent text-white bg-[#1D2833] border-[#1D2833] hover:bg-[#7EBC12] hover:border-[#7EBC12] hover:text-white text-lg font-semibold rounded-none normal-case ">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
