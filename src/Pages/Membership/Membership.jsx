import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import useDbUser from "../../components/hooks/useDbUser";

const stripePromise = loadStripe(import.meta.env.VITE_strip_pk);
const Membership = () => {
    const { isDbUser, isDbUserLoading } = useDbUser()
    console.log("uder from database", isDbUser);
    return (
        <div className="w-[28vw] mx-auto mt-52">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani text-center my-10">Payment Now</h2>
           <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Membership;