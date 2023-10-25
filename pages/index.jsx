import Header from "./components/header";
import CategorySection from "./components/category-section";
import ListSoftwareResult from "./components/ListSoftwareResult";
import Testimoni from "./components/testimoni";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div>
      <Header />
      <CategorySection />
      <ListSoftwareResult />
      <Testimoni />
      <Faq />
    </div>
  );
}
