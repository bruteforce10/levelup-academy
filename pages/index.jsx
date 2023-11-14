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
        <meta
          name="description"
          content="LevelUp Update skillmu dengan hal baru yang menghasilkan Login Member Lihat Kelas Best Seller Katalog Kelas Akses Kelas Pilihan Kelas Untukmu Temukan Kelas Favoritmu"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
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
