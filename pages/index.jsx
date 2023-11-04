import Header from "./components/header";
import CategorySection from "./components/category-section";
import ListSoftwareResult from "./components/ListSoftwareResult";
import Testimoni from "./components/testimoni";
import Faq from "./components/Faq";
import CallSection from "./components/CallSection";
import FeatureSection from "./components/FeatureSection";
import ClassSection from "./components/ClassSection";

export default function Home() {
  return (
    <div>
      <Header />
      <CategorySection />
      <FeatureSection />
      <ListSoftwareResult />
      <ClassSection />
      <Testimoni />
      <Faq />
      <CallSection />
    </div>
  );
}
