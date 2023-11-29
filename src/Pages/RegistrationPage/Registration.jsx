import { useContext, useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../LoginPage/SocialLogin";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { createUser } = useContext(AuthContext);
  const userLocation = useLocation();
  const userNavigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const image = event.target.image.value;
    const password = event.target.password.value;
    console.log(name, email, image, password);

    // reset error and reset sucess
    setRegisterError("");
    setSuccessMessage("");

    // user password validation
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{7,}$/.test(password)
    ) {
      setRegisterError(
        "Your password should have at least one uppercase character and special character"
      );
      return;
    }

    event.target.reset();

    // create user
    createUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Sign Up Sucessfully",
            showConfirmButton: false,
            timer: 1500,
          });
          userNavigate(userLocation.state ? userLocation.state : "/");
        }
        const currentUser = result.user;
        updateProfile(currentUser, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log("User Updated");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
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
              Already have an account yet?{" "}
              <Link to="/login">
                <span className="text-base font-normal text-[#7EBC12] link hover-link">
                  Log In
                </span>
              </Link>
            </p>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo</span>
                </label>
                <input
                  type="url"
                  required
                  placeholder="Photo url"
                  name="image"
                  className="input input-bordered"
                />
              </div>
              <div className="relative">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Password"
                    name="password"
                    className="input input-bordered"
                  />
                  <span
                    className="absolute top-14 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <MdRemoveRedEye></MdRemoveRedEye>
                    ) : (
                      <AiFillEyeInvisible></AiFillEyeInvisible>
                    )}
                  </span>
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani"
                  type="submit"
                  value="Sign Up"
                />
              </div>

              <br />
              <div>
                <input type="checkbox" required name="terms" id="terms" />
                <label className="ml-2 label-text font-bold" htmlFor="terms">
                  Yes, I agree with{" "}
                  <span>
                    {" "}
                    <Link className="link link-hover" href="#">
                      Terms of Use Conditions
                    </Link>
                  </span>
                </label>
              </div>
              <br />
              <div className="text-center space-y-6"></div>
            </form>
            <SocialLogin></SocialLogin>
            {registerError && <p className="text-red-600">{registerError}</p>}
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
