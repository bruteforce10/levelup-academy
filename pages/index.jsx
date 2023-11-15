import Header from "./components/header";
import CategorySection from "./components/category-section";
import ListSoftwareResult from "./components/ListSoftwareResult";
import Testimoni from "./components/testimoni";
import Faq from "./components/Faq";
import CallSection from "./components/CallSection";
import FeatureSection from "./components/FeatureSection";
import ClassSection from "./components/ClassSection";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Upgrade Skillmu di Level-Up Academy</title>
      </Head>
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
