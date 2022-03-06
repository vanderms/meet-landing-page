import Hero from "~/components/containers/section-hero";
import SectionDetails from "~/components/containers/section-details";
import SectionCta from "~/components/containers/section-cta";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    'og:site_name': 'Frontend Mentor | Meet landing page',
    'og:title': 'Meet landing page',
    'og:description':
      'My solution to the challenge Fylo landing page with two column layout, by Frontend Mentor',
    'og:image': 'https://meet-landing-page.pages.dev/assets/preview.jpg',
    'og:type': 'website',
    'og:image:type': 'image/jpeg',
    'og:url': 'https://meet-landing-page.pages.dev'
  };
};

export default function Index() {
  return (
   <main>
     <Hero/>
     <SectionDetails/>
     <SectionCta/>
   </main>
  );
}
