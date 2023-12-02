import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/web-tec-logo.png";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
    <>
      <div className="">
      <footer className="footer p-10 bg-[#1D2833] text-base-content items-center text-white">
      <div className="flex flex-wrap md:items-center lg:flex-row gap-10 lg:gap-32 mx-auto">
      <aside className="">
        <div className="space-y-4">
        <Link to="/">
              <img className="w-44" src={logo} alt="" />
            </Link>
        <p>Web Technology Ltd.<br/>Providing reliable tech since 2023</p>
        </div>
      </aside> 
      <nav className="space-y-4">
        <header className="footer-title">COMPANY</header> 
       <div className="space-y-4  flex flex-col">
       <Link className="link link-hover">About</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Products</Link>
       </div>
      </nav> 

      <nav className="space-y-4">
        <header className="footer-title">CONTACTS</header> 
       <div className="space-y-4  flex flex-col">
       <Link className="">1178 Broadway 3rd Floor, #1112</Link>
        <Link className="link link-hover">info@webtec.com</Link>
        <Link className="link link-hover">+434 43242232</Link>
       </div>
      </nav> 
    
      <form>
  <div className="">
  <header className="footer-title">Newsletter</header> 
    <div className="space-y-4  flex flex-col">
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-white uppercase">Subscribe</button>
      </div>
    </fieldset>

    <div className="flex items-center gap-3 text-xl">
    <Link><FaFacebookF></FaFacebookF></Link>
    <Link><FaYoutube></FaYoutube></Link>
    <Link><FaLinkedinIn></FaLinkedinIn></Link>
  </div>
    </div>
  </div>
  </form>
      </div>
    </footer>
    </div>
    <hr />
    <footer className="footer p-4 bg-[#1D2833] text-neutral-content justify-center">
  <div className="flex items-center">
  <div>
    <p className=" text-base font-Rajdhani">Copyright © 2023 - All right reserved Web Tec Ltd.</p>
  </div> 
  </div>
</footer>
      
    </>
    
    
    );
};

export default Footer;