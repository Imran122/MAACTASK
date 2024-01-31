import icon1 from "../../../assets/images/landingpage/icon/Amara.png";
import icon2 from "../../../assets/images/landingpage/icon/Aven.png";
import icon3 from "../../../assets/images/landingpage/icon/Circle.png";
import icon4 from "../../../assets/images/landingpage/icon/Kyan.png";
import icon5 from "../../../assets/images/landingpage/icon/Treva.png";
export default function ImpactTeams() {
  return (
    <div className="lg:px-32 px-5 mt-10">
      <h2 className="text-3xl text-center font-custom_primary_font font-extrabold text-primary_colour">
        5,000+ high-impact teams rely on Fieldx
      </h2>
      <div className="flex flex-col lg:flex-row gap-20 justify-center items-center py-10">
        <img src={icon1} />
        <img src={icon2} />
        <img src={icon3} />
        <img src={icon4} />
        <img src={icon5} />
      </div>
    </div>
  );
}
