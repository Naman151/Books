import Footer from "@/components/Footer/Footer";
import InfoCard from "@/components/InfoCard/InfoCard";
import MonthBook from "@/components/MonthBook/MonthBook";
import ReadersCard from "@/components/ReaderSection/ReadersCard";
import TopCard from "@/components/TopCard/TopCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Home() {
  return (
     <div>
        <ReadersCard title={"Readers' Choice"}/>
        <MonthBook/>
        <ReadersCard title={"Featured Books"}/>
        <Footer/>
     </div>
  );
}
