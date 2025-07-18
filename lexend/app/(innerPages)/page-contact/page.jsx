import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks from "@/components/innerpages/ContactLinks";
import Faq from "@/components/homes/home-2/Faq";
import Brands from "@/components/common/Brands2";
import Blogs from "@/components/homes/home-2/Blogs";
export const metadata = {
  title:
    "Contact 1 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Contact1 />

          <ContactLinks />
          <Faq />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-8 sm:pb-9 xl:pb-9">
              <h5
                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
              >
                Trusted by well-known brands.
              </h5>
              <div
                className="block-panel panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                  <Brands />
                </div>
              </div>
            </div>
          </div>
          <Blogs />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
