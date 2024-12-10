import React from "react";
import Image from "next/image";
import logo from "@/public/Group.jpg";
import branding from "@/public/Groupp.jpg";
import { FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-[4rem]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center w-[3rem] h-[3rem] mb-0">
            <div className="w-full">
              <Image src={logo} alt="logo" />
            </div>
          </div>
          <div className="flex justify-start items-start w-[8rem] h-[3rem] mt-0">
            <div className="w-full">
              <Image src={branding} alt="branding" />
            </div>
          </div>
        </div>
        <div className="flex gap-[5rem]">
          <div>
            <p className="font-bold mb-4">INFOS PRATIQUES</p>
            <p className="text-sm text-slate-400 mb-2">À propos</p>
            <p className="text-sm text-slate-400 mb-2">Livraisons & Reprises</p>
            <p className="text-sm text-slate-400 mb-2">Mode d’emploi</p>
            <p className="text-sm text-slate-400 mb-2">F.A.Q</p>
          </div>
          <div>
            <p className="font-bold mb-4">LÉGAL</p>
            <p className="text-sm text-slate-400 mb-2">Mentions légales</p>
            <p className="text-sm text-slate-400 mb-2">CGU</p>
            <p className="text-sm text-slate-400 mb-2">CGV</p>
            <p className="text-sm text-slate-400 mb-2">Politique de confidentialité</p>
          </div>
          <div>
            <p className="font-bold mb-4">MON COMPTE</p>
            <p className="text-sm text-slate-400 mb-2">Accéder à mon compte</p>
            <p className="text-sm text-slate-400 mb-2">Ma liste d’envie</p>
            <p className="text-sm text-slate-400 mb-2">Créer un compte</p>
            <p className="text-sm text-slate-400 mb-2">Mot de passe oublié</p>
          </div>
        </div>
      </div>
      <div className="mx-4 flex flex-col items-center justify-center">
        <div className="text-xl font-bold my-4">
            <p>NOUS SUIVRE</p>
        </div>
        <div className="flex gap-4">
            <div className="border border-slate-300 rounded-md p-2">
                <FaTwitter size={20}/>
            </div>
            <div className="border border-slate-300 rounded-md p-2">
                <FaInstagram size={20}/>
            </div>
            <div className="border border-slate-300 rounded-md p-2">
                <FaLinkedinIn size={20}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
