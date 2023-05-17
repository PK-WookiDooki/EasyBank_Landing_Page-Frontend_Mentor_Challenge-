// import React from "react";
import { HashLink } from "react-router-hash-link";
import { Logo } from "../../assets";
import { GButton } from "..";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollTop = window.pageXOffset || document.documentElement.scrollTop;

    let minDistance = Infinity;
    let closestSection = null;
    sections.forEach((section) => {
      const distance = Math.abs(section.offsetTop - scrollTop);
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section.id;
      }
    });
    setIsActive(closestSection);
  };

  return (
    <div className="sticky top-0 shadow bg-LGray z-20">
      <nav className="w-full lg:w-[85%] h-16 flex items-center justify-between mx-auto px-10 lg:px-0 z-10">
        <HashLink smooth to={"#home"}>
          <img src={Logo} alt="" />
        </HashLink>
        <nav className="hidden lg:flex items-center gap-5">
          <HashLink
            smooth
            to={"#home"}
            className={`h-16 ${
              isActive === "home" ? "border-LGreen" : ""
            } text-gray-400 flex items-center px-3 border-b-4 border-transparent hover:border-LGreen hover:text-DBlue duration-200`}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to={"#services"}
            className={`h-16 ${
              isActive === "services" ? "border-LGreen" : ""
            } text-gray-400 flex items-center px-3 border-b-4 border-transparent hover:border-LGreen hover:text-DBlue duration-200`}
          >
            About
          </HashLink>
          <HashLink
            smooth
            to={"#contact"}
            className={`h-16 ${
              isActive === "contact" ? "border-LGreen" : ""
            } text-gray-400 flex items-center px-3 border-b-4 border-transparent hover:border-LGreen hover:text-DBlue duration-200`}
          >
            Contact
          </HashLink>
          <HashLink
            smooth
            to={"#blogs"}
            className={`h-16 ${
              isActive === "blogs" ? "border-LGreen" : ""
            } text-gray-400 flex items-center px-3 border-b-4 border-transparent hover:border-LGreen hover:text-DBlue duration-200`}
          >
            Blog
          </HashLink>
          <HashLink
            smooth
            to={"#careers"}
            className={`h-16 ${
              isActive === "careers" ? "border-LGreen" : ""
            } text-gray-400 flex items-center px-3 border-b-4 border-transparent hover:border-LGreen hover:text-DBlue duration-200`}
          >
            Careers
          </HashLink>
        </nav>
        <div className="hidden lg:block">
          <GButton />
        </div>

        <button onClick={handleMenu} className=" duration-200 lg:hidden block">
          {openMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
              <g fill="#2D314D" fillRule="evenodd">
                <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
                <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
              <g fill="#2D314D" fillRule="evenodd">
                <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
              </g>
            </svg>
          )}
        </button>
        <nav
          className={`${
            openMenu
              ? "flex flex-col lg:hidden top-20"
              : "hidden lg:hidden -top-10"
          } items-center justify-center fixed bg-white z-[5] w-[90%] left-[5%] duration-1000 border rounded-sm shadow py-3`}
        >
          <HashLink
            smooth
            to={"#home"}
            className={`h-10 ${
              isActive === "home" ? "border-LGreen" : ""
            } text-DBlue flex items-center justify-center px-3 border-b-4 border-transparent hover:border-LGreen duration-200`}
            // onClick={handleMenu}
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to={"#services"}
            className={`h-10 ${
              isActive === "services" ? "border-LGreen" : ""
            } text-DBlue flex items-center justify-center px-3 border-b-4 border-transparent hover:border-LGreen duration-200`}
            // onClick={handleMenu}
          >
            About
          </HashLink>
          <HashLink
            smooth
            to={"#contact"}
            className={`h-10 ${
              isActive === "contact" ? "border-LGreen" : ""
            } text-DBlue flex items-center justify-center px-3 border-b-4 border-transparent hover:border-LGreen duration-200`}
            // onClick={handleMenu}
          >
            Contact
          </HashLink>
          <HashLink
            smooth
            to={"#blogs"}
            className={`h-10 ${
              isActive === "blogs" ? "border-LGreen" : ""
            } text-DBlue flex items-center justify-center px-3 border-b-4 border-transparent hover:border-LGreen duration-200`}
            // onClick={handleMenu}
          >
            Blog
          </HashLink>
          <HashLink
            smooth
            to={"#careers"}
            className={`h-10 ${
              isActive === "careers" ? "border-LGreen" : ""
            } text-DBlue flex items-center justify-center px-3 border-b-4 border-transparent hover:border-LGreen duration-200`}
            // onClick={handleMenu}
          >
            Careers
          </HashLink>
        </nav>
      </nav>
      <div
        className={` lg:hidden ${
          openMenu ? "block" : "hidden"
        } fixed w-full h-screen top-16 left-0 bg-black bg-opacity-30 z-[1]`}
      ></div>
    </div>
  );
};

export default Navbar;
