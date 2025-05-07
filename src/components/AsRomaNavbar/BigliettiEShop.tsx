import bigliettoIcona from "../../assets/BigliettoIcona.png";
import carrelloIcona from "../../assets/CarrelloIcona.png";

const BigliettiEShop = () => (
  <div className="flex items-center gap-4">
    <button className="flex items-center bg-yellow-400 justify-center gap-2 border border-white text-white w-40 px-4 py-2 rounded-full font-semibold cursor-pointer">
      <img className="w-5 h-5" src={bigliettoIcona} alt="Biglietti" />
      Biglietti
    </button>

    <button className="flex items-center justify-center gap-2 bg-yellow-400 border border-white text-white w-40 px-4 py-2 rounded-full font-semibold cursor-pointer">
      <img className="w-5 h-5" src={carrelloIcona} alt="Negozio" />
      Shop
    </button>
  </div>
);

export default BigliettiEShop;
