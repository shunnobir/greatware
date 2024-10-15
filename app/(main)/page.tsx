import DevelopmentApproach from "@/components/sections/approaches";
import Blogs from "@/components/sections/blogs";
import BuildingGreatSoftwares from "@/components/sections/building-great-softwares";
import Companies from "@/components/sections/companies";
import Hero from "@/components/sections/hero";
import Hire from "@/components/sections/hire";
import Services from "@/components/sections/services";
import Techstack from "@/components/sections/techstack";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Companies />
      <BuildingGreatSoftwares />
      <DevelopmentApproach />
      <Techstack />
      <Blogs />
      <Hire />
    </main>
  );
}
