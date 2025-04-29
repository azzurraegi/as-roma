import sponsorSeason from "../../assets/SponsorSeason.png";
import sponsorAdidas from "../../assets/SponsorAdidas.png";

const Sponsor = () => (
  <div className="sponsor">
    <img
      className="sponsor-season"
      src={sponsorSeason}
      alt="Riyadh Season Sponsor"
    />
    <img
      className="sponsor-adidas"
      src={sponsorAdidas}
      alt="Adidas Performance Sponsor"
    />
  </div>
);

export default Sponsor;
