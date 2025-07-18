import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/shop/Breadcumb";
import Shop4 from "@/components/shop/Shop4";
export const metadata = {
  title:
    "Shop 3 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ShopPage3() {
  return (
    <>
      <div
        className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
        style={{ overflowX: "clip" }}
      >
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb pageName="shop sidebar" />
          <Shop4 />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
