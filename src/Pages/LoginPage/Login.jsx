import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const userLocation = useLocation();
  const userNavigate = useNavigate();
  const emailRef = useRef(null);
  console.log(userLocation.state);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // reset error and reset sucess
    setRegisterError("");
    setSuccessMessage("");

    event.target.reset();

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Log In Sucessfully",
            showConfirmButton: false,
            timer: 1500,
          });
          userNavigate(userLocation.state ? userLocation.state : "/");
          console.log("login checked");
        }

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message)
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 p-5 rounded-none mt-32 mb-10">
          <div className="card-body w-[30rem]">
            <h1 className="text-2xl font-semibold text-black font-Rajdhani">
              Welcome Back to Web Tec
            </h1>
            <p className="text-base font-normal text-[#1D2833]">
              Don't have an account yet?{" "}
              <Link to="/registration">
                <span className="text-base font-normal text-[#7EBC12] link link-hover">
                  Sign Up
                </span>
              </Link>
            </p>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold ">Email Address</span>
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot your password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani"
                  type="submit"
                  value="Log In"
                />
              </div>
            </form>

            <div className="text-center mt-10">
              <SocialLogin></SocialLogin>
            </div>
            {registerError && <p className="text-red-600">{registerError}</p>}
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
