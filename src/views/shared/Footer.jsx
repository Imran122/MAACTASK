import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import imglogo from "../../assets/images/landingpage/icon/logofooter.png";

export default function Footer() {
  return (
    <div className="bg-[#00193D] py-10">
      <div className="mt-20 flex justify-between items-center flex-col ">
        <div>
          <img className="w[135px] h-[63px]" src={imglogo} />
        </div>
        <p className="text-center font-custom_primary_font mt-10 text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque.
        </p>
        <div className="flex gap-4 mt-8 ">
          <div className="text-center text-2xl font-bold text-[#00193D]  border-2 rounded-full bg-white p-2">
            <TiSocialTwitter />
          </div>
          <div className="text-center text-2xl font-bold text-[#00193D]  border-2 rounded-full bg-white p-2">
            <TiSocialFacebook />
          </div>
          <div className="text-center text-2xl font-bold text-[#00193D]  border-2 rounded-full bg-white p-2">
            <TiSocialLinkedin />
          </div>
        </div>
      </div>
      <div className="border-y-[#0D3166] border mt-10 px-32"></div>
      <h2 className="text-white text-center text-lg">
        © All rights reserve by <span className="text-red-600 mt-8">MAAC</span>
      </h2>
    </div>
  );
}
