import Header from "./components/header";
import CategorySection from "./components/category-section";
import ListSoftware from "./components/listSoftware";
import Testimoni from "./components/testimoni";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div>
      <Header />
      <CategorySection />
      <ListSoftware />
      <Testimoni />
      <Faq />
    </div>
  );
}
