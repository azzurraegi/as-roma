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
    <div className="navbar-container">
      <LogoClub />
      <div className="prima-riga">
        <Sponsor />
      </div>

      <div className="seconda-riga">
        <div className="contenuto-navbar">
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
