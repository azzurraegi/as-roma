import frecciaIconaAccedi from "../../assets/FrecciaIconaAccedi.png";

const Accedi = () => (
  <div className="flex justify-between items-center">
    <div className="flex items-center text-white font-semibold ml-4 mr-20">
      ACCEDI
      <img
        className="ml-2 w-4 h-4"
        src={frecciaIconaAccedi}
        alt="freccia-login"
      />
    </div>
  </div>
);

export default Accedi;
