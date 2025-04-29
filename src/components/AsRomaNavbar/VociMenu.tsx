import { asRomaNavbarList } from "../../utils/data";

const VociMenu = () => (
  <div className="elementi-navbar">
    {asRomaNavbarList.map((element) => (
      <span className="element" >
        {element.text}
      </span>
    ))}
  </div>
);

export default VociMenu;
