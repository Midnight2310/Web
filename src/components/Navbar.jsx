import { useState } from "react";
import Logo from "../assets/img/logo-black.png";
import { FaBars } from "react-icons/fa";

//rfce
function Navbar() {
  const [toggle, setToggle] = useState(false);
  // สร้างฟังก์ชันเพื่อเปลี่ยนค่าของ toggle F + F = T
  const updateToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-[#F5F7FA]">
      {/* เริ่มจาการทำหน้าเล็กไปใหญ่ md ปรับขนาดจอที่ใหญ่ */}
      <div className="container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]">
        <div>
          <a href="#">
            <img src={Logo} alt="" />
          </a>
        </div>
        {/* ${!toggle ?}เช็คถ้าจริงจ จะเป็นhidden ถ้าเท็จห้นไ ทำืี */}
        <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } flex flex-col my-5 md:flex md:flex-row`}
        >
          <li className="my-2 md:mx-4">
            <a href="#">Home</a>
          </li>
          <li className="my-2 md:mx-4">
            <a href="#">Service</a>
          </li>
          <li className="my-2 md:mx-4">
            <a href="#">Feature</a>
          </li>
          <li className="my-2 md:mx-4">
            <a href="#">Product</a>
          </li>
          <li className="my-2 md:mx-4">
            <a href="#">Testmonial</a>
          </li>
          <li className="my-2 md:mx-4">
            <a href="#">FAQ</a>
          </li>
        </ul>
        <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } flex flex-col my-5 md:flex md:flex-row`}
        >
          <li className="my-2 md:mx-4">
            <a
              className="inline-flex justify-center items-center py-2 px-4 text-[#4CAF4F] "
              href="#"
            >
              Login
            </a>
          </li>
          <li className="my-2 md:mx-4">
            <a
              className="inline-flex justify-center items-center py-2 px-4 bg-[#4CAF4F] text-white rounded-md"
              href="#"
            >
              Sign Up
            </a>
          </li>
        </ul>
        {/* Hamburger icon */}
        <FaBars
          onClick={updateToggle}
          className="absolute right-5 cursor-pointer text-xl md:hidden"
        />
      </div>
    </nav>
  );
}

export default Navbar;
