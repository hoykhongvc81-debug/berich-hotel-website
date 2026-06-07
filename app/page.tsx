import Header from "@/components/Header";
import FloatingLine from "@/components/FloatingLine";
import VideoSection from "@/components/VideoSection";
import FloatingCall from "@/components/FloatingCall";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Rooms from "@/components/Rooms";
import HotelInfo from "@/components/HotelInfo";
import Gallery from "@/components/Gallery";
import NearbyPlaces from "@/components/NearbyPlaces";
import PriceTable from "@/components/PriceTable";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import TakCity from "@/components/TakCity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyUs />
      <VideoSection />
      <Rooms />
      <PriceTable />
      <Reviews />
      <FAQ />
      <HotelInfo />
      <Gallery />
      <NearbyPlaces />
      <TakCity />
      <Footer />
      <FloatingLine />
      <FloatingCall />
    </main>
  );
}
