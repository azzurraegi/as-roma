import sponsorSeason from "../../assets/SponsorSeason.png";
import sponsorAdidas from "../../assets/SponsorAdidas.png";

const Sponsor = () => (
  <div className="flex items-center mr-8 gap-4 ml-[88rem] justify-between">
    <img
      className="w-12 h-auto"
      src={sponsorSeason}
      alt="Riyadh Season Sponsor"
    />
    <img className="w-7" src={sponsorAdidas} alt="Adidas Performance Sponsor" />
  </div>
);

export default Sponsor;
