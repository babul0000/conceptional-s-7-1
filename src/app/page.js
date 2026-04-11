import Banner from "@/components/hompage/Banner";
import Stats from "@/components/hompage/Stats";
import TrendingApps from "@/components/hompage/TrendingApps";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Stats/>
      {/* <TrendingApps/> */}
    </div>
  );
}
