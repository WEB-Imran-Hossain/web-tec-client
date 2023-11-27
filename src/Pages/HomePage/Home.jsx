import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import About from "../AboutPage/About";

const Home = () => {
    return (
        <div>
              <Helmet>
                <title>WEB TEC | HOME</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;