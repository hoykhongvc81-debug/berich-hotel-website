import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Rooms from "@/components/Rooms";
import HotelInfo from "@/components/HotelInfo";
import Gallery from "@/components/Gallery";
import NearbyPlaces from "@/components/NearbyPlaces";
import PriceTable from "@/components/PriceTable";
import ChildrenPolicy from "@/components/ChildrenPolicy";
import Reviews from "@/components/Reviews";
import Amenities from "@/components/Amenities";
import FAQ from "@/components/FAQ";
import TakCity from "@/components/TakCity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyUs />
      <Amenities />
      <VideoSection />
      <Rooms />
      <ChildrenPolicy />
      <PriceTable />
      <Reviews />
      <FAQ />
      <HotelInfo />
      <Gallery />
      <NearbyPlaces />
      <TakCity />
      <Footer />
    </main>
  );
}
