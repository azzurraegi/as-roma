import bigliettoIcona from "../../assets/BigliettoIcona.png";
import carrelloIcona from "../../assets/CarrelloIcona.png";

const BigliettiEShop = () => (
  <div className="biglietti-shop">
    <button className="voce">
      <img className="icona-bottone" src={bigliettoIcona} alt="Biglietti" />
      Biglietti
    </button>

    <button className="voce">
      <img className="icona-bottone" src={carrelloIcona} alt="Negozio" />
      Shop
    </button>
  </div>
);

export default BigliettiEShop;
