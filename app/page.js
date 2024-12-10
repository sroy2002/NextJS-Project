import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { HiOutlinePlus } from "react-icons/hi2";
import Carousal from "./Components/Carousal";
import CardLarge from "./Components/CardLarge";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const geist = localFont({
  src: "../app/fonts/GeistVF.woff",
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection />
        {/* // Description Section  */}
        <div className="mx-6 px-6 flex gap-4">
          <div className="w-[50%]">
            <p className={`${inter.className} mb-2`}>Description produit</p>
            <p className={`${geist.className} text-sm text-[#9c9c9c]`}>
              Festi vous propose à la location un/une "Jewel – grand
              couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou
              du personnel, ce produit a fait l'objet d'une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
              "VAJGC". Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver tout une série d'autre produit à louer de ce
              type dans la catégorie "Art de la Table".
            </p>
          </div>
          <div className="w-[50%] flex flex-col  justify-center items-center">
            <div className="border border-slate-300 w-full  flex items-center justify-between hover:bg-slate-100 hover:cursor-pointer">
              <span className="text-left h-[3.8rem] py-4 px-8">LIVRAISONS</span>
              <div className=" px-4">
                <HiOutlinePlus size={23} />
              </div>
            </div>
            <div className="border border-slate-300 w-full  flex items-center justify-between hover:bg-slate-100 hover:cursor-pointer">
              <span className="text-left h-[3.8rem] py-4 px-8">QUESTIONS</span>
              <div className=" px-4">
                <HiOutlinePlus size={23} />
              </div>
            </div>
          </div>
        </div>

        {/* Article Section */}

        <div className="bg-[#fefdfd] mx-6 my-8 p-6">
          <div className="flex items-center justify-between">
            <span className={`${inter.className} text-2xl`}>
              Articles Similaires
            </span>
            <span className={`${inter.className} text-sm underline`}>
              VOIR TOUTE LA COLLECTION
            </span>
          </div>
          <div className="h-auto overflow-visible">
            <Carousal className="h-full flex-shrink-0" />
          </div>
        </div>

        <div className="px-10  my-4 w-full overflow-x-hidden">
          <div className="text-2xl my-4 font-medium">
            <p>Ces produits pourraient vous intéresser</p>
          </div>
          <div className="flex w-full justify-between ">
            <CardLarge width="32%"/>
            <CardLarge width="32%"/>
            <CardLarge width="32%"/>
          </div>
        </div>
      </main>
    </div>
  );
}
