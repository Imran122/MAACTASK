import AboutUs from "../../components/HomePageComponents/AboutUs";
import Banner from "../../components/HomePageComponents/Banner";
import FaqComponent from "../../components/HomePageComponents/FaqComponent";
import ImpactTeams from "../../components/HomePageComponents/ImpactTeams";
import ProductFeatures from "../../components/HomePageComponents/ProductFeatures";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <ProductFeatures />
      <AboutUs />
      <FaqComponent />
      <ImpactTeams />
    </div>
  );
}
