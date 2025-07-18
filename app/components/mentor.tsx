import Link from "next/link";
import Image from "next/image";
import mentorImage from "@/public/mentor_image.jpg"; // replace with your actual image

export default function ConnectMentorSection() {
  return (
    <section className="w-full bg-background bg-grid-pattern py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with Industry Mentors
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            Get personalized guidance and career advice directly from experienced Product Managers.
            Whether you're just starting out or pivoting your path, our mentors are here to help.
          </p>
          <Link href="/connect">
            <button className="px-6 py-3 bg-primary rounded-lg shadow-md hover:shadow-lg transition duration-300 font-medium">
              Connect Now
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={mentorImage}
            alt="Connect with Mentor"
            width={450}
            height={350}
            className="rounded-xl shadow-lg object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
