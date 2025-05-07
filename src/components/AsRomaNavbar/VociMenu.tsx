import { asRomaNavbarList } from "../../utils/data";

const VociMenu = () => (
  <div className="flex text-[0.9rem] ml-4 mr-40 justify-between items-center">
    {asRomaNavbarList.map((element) => (
      <span className="text-white font-bold mx-[10px] cursor-pointer hover:text-yellow-400 transition-colors duration-200">
        {element.text}
      </span>
    ))}
  </div>
);

export default VociMenu;
