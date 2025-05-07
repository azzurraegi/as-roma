import React from "react";
import "../style.css";
import LogoClub from "./LogoSquadra";
import Sponsor from "./Sponsor";
import MenuHamburger from "./MenuHamburger";
import VociMenu from "./VociMenu";
import LinguaSelettore from "./LinguaSelettore";
import Ricerca from "./Ricerca";
import BigliettiEShop from "./BigliettiEShop";
import Accedi from "./Accedi";

const AsRomaNavbar = () => {
  return (
    <div className="relative w-full font-sans">
      <LogoClub />
      <div className="flex justify-between items-center bg-yellow-400 p-4">
        <Sponsor />
      </div>

      <div className="flex bg-red-800 text-center p-2">
        <div className="flex  items-center justify-between w-full gap-4 px-4 ">
          <MenuHamburger />
          <VociMenu />
          <LinguaSelettore />
          <Ricerca />
          <BigliettiEShop />
          <Accedi />
        </div>
      </div>
    </div>
  );
};

export default AsRomaNavbar;
