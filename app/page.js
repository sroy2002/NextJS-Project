import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { HiOutlinePlus } from "react-icons/hi2";
import Carousal from "./Components/Carousal";
import CardLarge from "./Components/CardLarge";
import p1 from "@/public/p1.png";
import p2 from "@/public/p2.png";
import p3 from "@/public/p3.png";
import p4 from "@/public/p4.png";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";

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
              Festi vous propose à la location un/une &quot;Jewel – grand
              couteau/10pc&quot; pour votre évenement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire ou
              du personnel, ce produit a fait l&apos;objet d&apos;une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
              &quot;VAJGC&quot;. Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver tout une série d&apos;autre produit à louer de ce
              type dans la catégorie &quot;Art de la Table&quot;.
            </p>
          </div>
          <div className="w-[50%] flex flex-col  justify-center items-center">
            <div className="border border-slate-300 w-full  flex items-center justify-between hover:bg-slate-100 hover:cursor-pointer">
              <span className="text-left h-[3.8rem] py-4 px-8">LIVRAISONS</span>
              <div className="px-4">
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
          <div className="flex items-center justify-between">
            <div className="text-2xl my-4 font-medium">
              <p>Ces produits pourraient vous intéresser</p>
            </div>
            <span className={`${inter.className} text-sm underline`}>
              VOIR TOUTE LA COLLECTION
            </span>
          </div>

          <div className="flex w-full justify-between ">
            <CardLarge width="32%" />
            <CardLarge width="32%" />
            <CardLarge width="32%" />
          </div>
        </div>

        <div className="my-6 px-6 py-6 pb-[5em] flex flex-col items-center justify-center bg-[#fff9fb]">
          <p className="text-2xl font-medium  mt-4 mb-2">
            On s&apos;occupe de
            <span className="text-[#5cd2dd] font-extrabold ">tout</span>
          </p>
          <p className="text-sm text-slate-400">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
          <div className="flex justify-center items-center gap-8 w-[80%] px-[10rem] mx-auto mt-10">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-[3rem]">
                <Image src={p1} alt="pic-1" />
              </div>
              <p className="font-medium text-[#6e4955]">Livraison & Reprise</p>
              <p className="text-sm text-[#8b6d78]">Selon vos besoins</p>
            </div>

            <div className="w-[20%] border-t border-[#a48f98]"></div>

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-[3rem]">
                <Image src={p2} alt="pic-2" />
              </div>
              <p className="font-medium text-[#6e4955]">Nettoyage</p>
              <p className="text-sm text-[#8b6d78]">Selon vos besoins</p>
            </div>

            <div className="w-[20%] border-t border-[#a48f98]"></div>

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-[3rem]">
                <Image src={p3} alt="pic-3" />
              </div>
              <p className="font-medium text-[#6e4955]">Commande Illimitée</p>
              <p className="text-sm text-[#8b6d78]">Tout est possible</p>
            </div>

            <div className="w-[20%] border-t border-[#a48f98]"></div>

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-[3rem]">
                <Image src={p4} alt="pic-4" />
              </div>
              <p className="font-medium text-[#6e4955]">
                Transport & Enlèvement
              </p>
              <p className="text-sm text-[#8b6d78]">On s&apos;occupe de tout</p>
            </div>
          </div>
        </div>
        <div className="m-6 mt-[8rem] px-4">
          <Feedback />
        </div>
      </main>
      <div className="w-full border-b border-b-slate-200 py-8"></div>
      <div className="m-6 p-6">

      <Footer/>
      </div>
    </div>
  );
}
