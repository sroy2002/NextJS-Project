import { Poppins } from "next/font/google";
import { SlBulb } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import logo from "@/public/Group.jpg";
import branding from "@/public/Groupp.jpg";
import "./globals.css";
import Search from "./Components/Search";

const poppins = Poppins({
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// sm:bg-blue-500 md:bg-purple-500 lg:bg-green-500 xl:bg-orange-300 2xl:bg-red-700
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white ">
        <nav className="my-2">
          <div className="flex gap-4 items-center justify-between px-4">
            <div className="flex flex-col gap-2 items-center justify-center min-w-[30%] xl:min-w-[10%] 2xl:min-w-[5%] ">
              <div className="w-full h-full">
                <Image src={logo} width={60} height={60} alt="logo"></Image>
              </div>
              <div className="w-full h-full">
                <Image
                  src={branding}
                  width={130}
                  height={130}
                  alt="brand name"
                ></Image>
              </div>
            </div>
            <div className="min-w-[50%] 2xl:max-w-[40%]">
              <Search />
            </div>
            <div className="flex gap-4 items-center text-[0.9rem]">
              <div className="flex gap-1 items-center">
                <SlBulb size={17} />
                <p>Inspiration</p>
              </div>
              <div className="flex gap-1 items-center">
                <CiHeart size={20} />
                <p>Mes favoris</p>
                <span className="bg-slate-200 px-3 py-1 rounded-2xl text-sm ml-1">
                  24
                </span>
              </div>
              <div className="flex gap-1 items-center bg-[#0093D0] border-[#007AAD] text-white p-3 rounded-md">
                <PiShoppingCartSimpleLight size={20} />
                <p>Panier</p>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-[44px] w-[44px] bg-[#d7dcdd] rounded-full"></div>
                <p className="ml-2">FR</p>
                <FaAngleDown />
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
