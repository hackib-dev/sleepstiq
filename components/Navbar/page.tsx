"use client";

import Logo from "../../public/images/logo.png";
import Image from "next/image";
import { MenuItemProps, menuItems } from "./constant";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { FaX } from "react-icons/fa6";

const MenuItem: React.FC<MenuItemProps> = ({ href, children, onClick }) => {
  const linkProps = href.startsWith("http")
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <Link {...linkProps} onClick={onClick}>
      <span className="font-medium text-center transition duration-300 hover:text-base">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      const isActive = pathname === item.href;

      return (
        <MenuItem key={index} href={item.href} onClick={() => setIsOpen(false)}>
          <span className={isActive ? "text-[#12305B] font-semibold" : ""}>
            {item.label}
          </span>
        </MenuItem>
      );
    });
  };

  return (
    <div className="mb-[60px] md:mb-2 ">
      <div className="px-5 lg:px-28 xl:px-40 bg-white bg-opacity-0 backdrop-blur-2xl py-5 sm:px-16 flex items-center fixed top-0 z-50 w-full justify-between">
        <div className="flex justify-between w-3/5 items-center">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" className="w-14 md:w-20"></Image>
            </Link>
          </div>

          <div className="hidden md:flex gap-2">
            <div className="flex gap-10">
              {menuItems
                .filter((item) => item.label !== "Contact Us")
                .map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={index} href={item.href}>
                      <div
                        className={`text-black text-sm ${
                          isActive ? "text-[#12305B] font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="flex md:hidden">
          {isOpen ? (
            <FaX
              onClick={toggleMenu}
              aria-label="Toggle menu"
              color="#12305B"
            />
          ) : (
            <MenuIcon
              onClick={toggleMenu}
              aria-label="Toggle menu"
              color="#12305B"
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden mt-20 py-3">
          <div className="flex flex-col z-50 bg-white text-black h-screen items-center justify-center fixed w-full gap-10">
            {renderMenuItems()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
