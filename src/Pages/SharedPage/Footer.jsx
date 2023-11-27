import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/web-tec-logo.png";
import { FaFacebook, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
    <>
      <footer className="footer p-10 bg-[#1D2833] text-base-content items-center justify-around text-white flex-col">
      <aside className="flex">
        <div className="space-y-4 lg:-mt-14">
        <Link to="/">
              <img className="w-44" src={logo} alt="" />
            </Link>
        <p>Web Technology Ltd.<br/>Providing reliable tech since 2023</p>
        </div>
      </aside> 
    <div className="flex gap-20 lg:gap-40">
    <nav className="flex flex-col space-y-4">
        <header className="footer-title">Products</header> 
        <div className="space-y-4  flex flex-col">
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
        </div>
      </nav> 
      <nav className="flex flex-col space-y-4">
        <header className="footer-title">Company</header> 
       <div className="space-y-4  flex flex-col">
       <Link className="link link-hover">About</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
       </div>
      </nav> 

      <nav className="flex flex-col space-y-4">
        <header className="footer-title">CONTACTS</header> 
       <div className="space-y-4  flex flex-col">
       <Link className="">1178 Broadway 3rd Floor, #1112</Link>
        <Link className="link link-hover">info@webtec.com</Link>
        <Link className="link link-hover">+434 43242232</Link>
       </div>
      </nav> 
    </div>
      <form>
  <div className="flex flex-col lg:-mt-8">
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
    </footer>
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