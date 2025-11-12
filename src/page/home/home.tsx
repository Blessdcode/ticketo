import CategoriesSection from "@/components/home-section/categories-section";
import EventSection from "@/components/home-section/event-section";
import HeroPage from "@/components/home-section/hero-page";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <CategoriesSection />
      <EventSection/>
    </div>
  );
};

export default Home;
