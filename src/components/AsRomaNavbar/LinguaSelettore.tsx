import frecciaIconaLingua from "../../assets/FrecciaIconaLingua.png";

const LinguaSelettore = () => (
  <div className="flex items-center gap-[4px] ml-4">
    <div className="text-white font-bold cursor-pointer">IT</div>
    <img className="w-4" src={frecciaIconaLingua} alt="Freccia" />
  </div>
);

export default LinguaSelettore;
