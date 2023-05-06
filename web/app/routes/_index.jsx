import Categories from "../components/Categories";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PartnerSignUp from "../components/PartnerSignUp";
import Footer from "../components/Footer";

export const meta = () => {
  return [{ title: "Gogo" }];
};

export default function Index() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <PartnerSignUp />
      <Footer />
    </>
  );
}
