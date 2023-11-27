import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import Swal from "sweetalert2";

const provider = new GoogleAuthProvider();

const SocialLogin = () => {
    const userLocation = useLocation();
    const userNavigate = useNavigate();

    // google button handle
    const handleSocialLogin = () => {
        signInWithPopup(auth, provider).then(res => {
            const currentUser = res?.user;
            console.log("current user from social login", currentUser);
            if (res.user) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Google Log In Sucessfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                userNavigate(userLocation.state ? userLocation.state : "/");
            }
        }).catch(error => {
            console.log(error);
        })
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    onClick={handleSocialLogin}
                    className="text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white font-Rajdhani font-bold p-3 flex items-center"
                >
                    <FaGoogle className="mr-2"></FaGoogle>Continue with Google
                </button>
            </div>
        </>
    );
};

export default SocialLogin;
