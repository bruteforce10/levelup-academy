import Header from "./components/header";
import CategorySection from "./components/category-section";
import ListSoftwareResult from "./components/ListSoftwareResult";
import Testimoni from "./components/testimoni";
import Faq from "./components/Faq";
import CallSection from "./components/CallSection";

export default function Home() {
  return (
    <div className="h-[20000px]">
      <Header />
      <CategorySection />
      <ListSoftwareResult />
      <Testimoni />
      <Faq />
      <CallSection />
    </div>
  );
}
