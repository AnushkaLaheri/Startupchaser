import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import CareerHero from "@/components/innerpages/CareerHero";
import CareerBenefits from "@/components/innerpages/CareerBenefits";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Feedback from "@/components/homes/home-2/Feedback";
import Brands from "@/components/innerpages/Brands";
import Blogs from "@/components/homes/home-2/Blogs";
export const metadata = {
  title:
    "Career || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function CareerPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <CareerHero />
          <CareerBenefits />
          <CareerOpenings />
          <Feedback />
          <Brands />
          <Blogs />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
