import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs3 from "@/components/blog/Blogs3";
export const metadata = {
  title:
    "Blog Category || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default async function BlogCategoryPage(props) {
  const params = await props.params;
  const category = params.category.split("%20").join(" ");
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BreadCumb category={category} />
          <Blogs3 category={category} />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
