import Hero from "~/components/containers/section-hero";
import SectionDetails from "~/components/containers/section-details";
import SectionCta from "~/components/containers/section-cta";

export default function Index() {
  return (
   <main>
     <Hero/>
     <SectionDetails/>
     <SectionCta/>
   </main>
  );
}
