import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center font-bold text-black flex flex-col justify-center items-center h-screen space-y-5">
      <h2 className="text-[160px]">404</h2>
      <p className="text-3xl">Opps! You're lost</p>
      <p className="text-base font-normal text-[#737373]">
        The page you are looking for does not exist. But you can click the
        button and go back to the homepage.
      </p>
      <Link to="/">
        <button className="btn hover:bg-transparent text-white bg-[#FF3811] border-[#FF3811] hover:border-[#32CD32] hover:text-[#32CD32] text-lg font-semibold rounded-none normal-case ">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
