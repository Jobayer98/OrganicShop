import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import logo from "../../../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#647075]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start justify-items-center mx-36 pt-6">
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="flex justify-center items-start gap-2">
            <img className="h-8" src={logo} alt="logo" />

            <h1 className="text-2xl font-bold">Organick</h1>
          </div>
          <p className="text-gray-50">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <div className="flex justify-center items-center text-2xl mb-4 gap-4 mt-4">
            <span className="p-4 rounded-full bg-[#EFF6F1]">
              <AiOutlineInstagram />
            </span>
            <span className="p-4 rounded-full bg-[#EFF6F1]">
              <FaFacebook />
            </span>
            <span className="p-4 rounded-full bg-[#EFF6F1]">
              <AiOutlineTwitter />
            </span>
            <span className="p-4 rounded-full bg-[#EFF6F1]">
              <FaPinterest />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Important Links</h3>
          <ul className="flex flex-col gap-1 text-gray-50">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul className="flex flex-col gap-1 text-gray-50">
            <li>
              <p className="text-sm font-semibold">Email</p>
              <span className="text-sm">organic@gmail.com</span>
            </li>
            <li>
              <p className="text-sm font-semibold ">Phone</p>
              <span className="text-sm">+880993749</span>
            </li>
            <li>
              <p className="text-sm font-semibold ">Address</p>
              <span className="text-sm">88 road, borklyn street, USA</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-50 mt-8">
        <p>Copyright &copy; Organick - 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
